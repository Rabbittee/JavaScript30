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

  let block = false;
  function dispatch(action: Action) {
    if (reducer) value = reducer(value, action);

    if (block) return;

    block = true;

    setTimeout(() => {
      effects.forEach((effect) => effect(value, action, dispatch));
      block = false;
    }, 150);
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

const selectBy =
  <R extends Document | Element, T extends Element>(query: string) =>
  (target: R) =>
    target.querySelector<T>(query);

const select = <T extends Element>(query: string) => document.querySelector<T>(query);
const selectAll = <T extends Element>(query: string) =>
  Array.from(document.querySelectorAll<T>(query));

const mergeLeft = (a: object) => (b: object) => ({ ...b, ...a });

const setPropertyTo = (el: HTMLElement) => (key: string, value: string) =>
  el.style.setProperty(`--${key}`, value);

const px = (value: number) => value + 'px';

const toRect = (el: Element) => el.getBoundingClientRect();

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

type Rect = Pick<DOMRect, 'width' | 'height' | 'x' | 'y'>;

type State = {
  visible: boolean;
  dropdownRect: Rect;
};
type Action = { type: 'hover'; payload: Rect } | { type: 'leave'; payload: Rect };

const selectDropDown = selectBy('.dropdown');

state<State, Action>({
  visible: false,
  dropdownRect: { width: 0, height: 0, x: 0, y: 0 },
})
  //
  .observe((initialState, dispatch) => {
    function onHover({ target }: Event) {
      if (!(target instanceof HTMLElement)) return;
      const nav = toRect(select('.top'));
      const dropdown = toRect(selectDropDown(target.parentElement));

      dispatch({
        type: 'hover',

        payload: {
          width: dropdown.width,
          height: dropdown.height,
          x: dropdown.x - nav.x,
          y: dropdown.y - nav.y,
        },
      });
    }

    function onLeave() {
      dispatch({
        type: 'leave',
        payload: initialState.dropdownRect,
      });
    }

    selectAll<HTMLAnchorElement>('.cool > li > a')
      .map(tap((el) => el.addEventListener('pointerenter', onHover)))
      .map(tap((el) => el.addEventListener('pointerleave', onLeave)));
  })
  .reduce((state, action) => {
    if (action.type === 'hover') {
      return {
        ...state,
        visible: true,
        dropdownRect: action.payload,
      };
    }

    if (action.type === 'leave') {
      return {
        ...state,
        visible: false,
        dropdownRect: action.payload,
      };
    }

    return state;
  })
  .then(({ dropdownRect, visible }) => {
    functor(select<HTMLDivElement>('.dropdownBackground'))
      .map(setPropertyTo)
      .map(tap((set) => set('width', px(dropdownRect.width))))
      .map(tap((set) => set('height', px(dropdownRect.height))))
      .map(tap((set) => set('x', px(dropdownRect.x))))
      .map(tap((set) => set('y', px(dropdownRect.y))))
      .map(tap((set) => set('opacity', visible ? '1' : '0')));
  })
  .then(({ visible }) =>
    selectAll<HTMLDivElement>('.dropdown').forEach((el) => {
      const current = el.parentElement.matches(':hover');

      el.classList.toggle('open', current && visible);
    })
  );
