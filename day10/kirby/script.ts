type Fn<T, R> = (arg: T) => R;

const select = <T extends Element>(query: string) =>
  document.querySelector<T>(query);

const selectAll = <T extends Element>(query: string) =>
  Array.from(document.querySelectorAll<T>(query));

function isKeyboardEvent(e: any): e is KeyboardEvent {
  return e instanceof KeyboardEvent;
}

function isInputElement(e: any): e is HTMLInputElement {
  return e instanceof HTMLInputElement;
}

function state<State, Action>(value: State) {
  type DispatchFn = (action: Action) => void;
  type SourceFn = (dispatch: DispatchFn) => void;
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
    source(dispatch);

    return combiner;
  }

  return { observe };
}

const inRange = (bound1: number, bound2: number) => (value: number) => {
  const [min, max] = bound1 > bound2 ? [bound2, bound1] : [bound1, bound2];

  return min <= value && value <= max;
};

function keypress(key: string) {
  let holding = false;

  window.addEventListener("keydown", (e) => {
    if (!isKeyboardEvent(e)) return;

    if (e.key === key) holding = true;
  });

  window.addEventListener("keyup", (e) => {
    if (!isKeyboardEvent(e)) return;

    holding = false;
  });

  return {
    get holding() {
      return holding;
    },
  };
}

type State = {
  lastIndex?: number;
  key: ReturnType<typeof keypress>;
  inputs: HTMLInputElement[];
};

type Action =
  | { type: "change"; target: HTMLInputElement }
  | { type: "update"; lastIndex: number };

state<State, Action>({
  lastIndex: undefined,
  key: keypress("Shift"),
  inputs: selectAll<HTMLInputElement>(".inbox .item input"),
})
  .observe((dispatch) => {
    select(".inbox").addEventListener(
      "change",
      ({ target }) =>
        isInputElement(target) && dispatch({ type: "change", target })
    );
  })
  .reduce((state, action) => {
    if (action.type === "update")
      return { ...state, lastIndex: action.lastIndex };

    return state;
  })
  .then((state, action, dispatch) => {
    if (action.type !== "change" || !action.target.checked) return;

    const index = state.inputs.findIndex((item) => action.target === item);
    if (index < 0) return;

    dispatch({ type: "update", lastIndex: index });

    if (state.lastIndex === undefined || !state.key.holding) return;

    state.inputs
      .filter((_, current) => inRange(state.lastIndex, index)(current))
      .forEach((input) => (input.checked = true));
  });
