type Fn<T, R> = (arg: T) => R;

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

    queueMicrotask(() => {
      effects.forEach((effect) => effect(value, action, dispatch));
    });
  }

  function observe(source: SourceFn) {
    queueMicrotask(() => source(value, dispatch));

    return combiner;
  }

  return { observe };
}

const functor = <T>(val: T) => ({
  map: <R>(fn: Fn<T, R>) => functor(fn(val)),
});

const tap =
  <T>(fn: Fn<T, void>) =>
  (val: T) => (fn(val), val);

const select = <T extends Element>(query: string) => document.querySelector<T>(query);

type State = {
  pressing: boolean;
  anchor: number;
  movement: number;
  scroll: number;
};

type Action =
  | { type: 'down'; payload: number }
  | { type: 'move'; payload: number }
  | { type: 'up' };

state<State, Action>({
  pressing: false,
  anchor: 0,
  movement: 0,
  scroll: select('.items').scrollLeft,
})
  .observe((_, dispatch) => {
    functor(select<HTMLDivElement>('.items'))
      //
      .map(
        tap((el) =>
          el.addEventListener('pointerdown', (e) =>
            dispatch({
              type: 'down',
              payload: e.clientX,
            })
          )
        )
      )
      .map(
        tap((el) =>
          el.addEventListener('pointermove', (e) =>
            dispatch({
              type: 'move',
              payload: e.clientX,
            })
          )
        )
      )
      .map(
        tap((el) =>
          el.addEventListener('pointerup', () =>
            dispatch({
              type: 'up',
            })
          )
        )
      );
  })
  .reduce((state, action) => {
    if (action.type === 'down') {
      return {
        ...state,
        pressing: true,
        anchor: action.payload,
      };
    }
    if (state.pressing && action.type === 'move') {
      return {
        ...state,
        movement: state.anchor - action.payload,
      };
    }
    if (action.type === 'up') {
      return {
        pressing: false,
        anchor: 0,
        movement: 0,
        scroll: state.scroll + state.movement,
      };
    }
    return state;
  })
  .then(({ pressing }) => select('.items').classList.toggle('active', pressing))
  .then(({ pressing, scroll, movement }) => {
    if (pressing) select('.items').scrollLeft = scroll + movement;
  });
