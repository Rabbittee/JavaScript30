function state<State, Action>(value: State) {
  type DispatchFn = (action: Action) => void;
  type SourceFn = (state: State, dispatch: DispatchFn) => void;
  type ReducerFn = (state: State, action: Action) => State;
  type EffectFn = (state: State, action: Action, dispatch: DispatchFn) => void;

  let reducer: ReducerFn = undefined;
  let effects: EffectFn[] = [];

  const subject = {
    then: (effect: EffectFn) => {
      effects.push(effect);

      return subject;
    },
  };

  const combiner = {
    ...subject,
    reduce(_reducer: ReducerFn) {
      reducer = _reducer;

      return subject;
    },
  };

  function dispatch(action: Action) {
    if (reducer) value = reducer(value, action);

    queueMicrotask(() => effects.forEach((effect) => effect(value, action, dispatch)));
  }

  function observe(source: SourceFn) {
    queueMicrotask(() => source(value, dispatch));

    return combiner;
  }

  return { observe };
}

const select = <T extends Element>(query: string) => document.querySelector<T>(query);

const storage = <T = {}>(storage: Storage, key: string) => ({
  get: () => JSON.parse(storage.getItem(key)) as T,
  set: (data?: T) => storage.setItem(key, JSON.stringify(data)),
});

interface Item {
  name: string;
  done: boolean;
}

type State = {
  storage: {
    get: () => Item[];
    set: (data?: Item[]) => void;
  };
  renderer: HTMLUListElement;
  items: Item[];
};

type Action =
  | { type: 'init'; items: Item[] }
  | { type: 'add'; item: Item }
  | { type: 'update'; item: Item };

function Plate({ name, done }: Item) {
  return /*html */ `
    <li>
        <input type="checkbox" id="${name}" ${done ? 'checked' : ''} />
        <label for="${name}">${name}</label>
    </li>
    `;
}

const save = ({ storage, items }: State) => storage.set(items);

const render = ({ renderer, items }: State) => (renderer.innerHTML = items.map(Plate).join(''));

state<State, Action>({
  storage: storage(window.localStorage, 'kirby'),
  renderer: select('.plates'),
  items: JSON.parse(window.localStorage.getItem('items')) || [],
})
  //
  .observe(({ storage }, dispatch) => {
    select('.add-items').addEventListener('submit', (event) => {
      event.preventDefault();

      const element = event.currentTarget;
      if (!(element instanceof HTMLFormElement)) return;

      const form = new FormData(element);

      dispatch({
        type: 'add',
        item: { name: String(form.get('item')), done: false },
      });

      element.reset();
    });

    select('.plates').addEventListener('change', ({ target }) => {
      if (!(target instanceof HTMLInputElement)) return;

      dispatch({
        type: 'update',
        item: { name: target.id, done: target.checked },
      });
    });

    storage.get() && dispatch({ type: 'init', items: storage.get() });
  })
  .reduce((state, action) => {
    if (action.type === 'init') {
      return { ...state, items: action.items };
    }

    if (action.type === 'add') return { ...state, items: state.items.concat(action.item) };

    if (action.type === 'update')
      return {
        ...state,
        items: state.items.map((item) => (item.name === action.item.name ? action.item : item)),
      };

    return state;
  })
  .then(save)
  .then(render);
