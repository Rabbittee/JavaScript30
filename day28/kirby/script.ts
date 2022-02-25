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

const select = <T extends Element>(query: string) => document.querySelector<T>(query);

const lerp = (v0: number, v1: number, t: number) => v0 * (1 - t) + v1 * t;

type State = {
  range: { min: number; max: number };
  rate: number;
  percent: number;
};
type Action = { type: 'move'; payload: number };

state<State, Action>({
  range: { min: 0.25, max: 4 },
  rate: 1,
  percent: 25,
})
  .observe((_, dispatch) => {
    select<HTMLDivElement>('.speed').addEventListener('mousemove', ({ target, offsetY }) => {
      if (target instanceof HTMLDivElement) {
        dispatch({
          type: 'move',
          payload: offsetY / target.clientHeight,
        });
      }
    });
  })
  .reduce((state, action) => {
    if (action.type === 'move') {
      return {
        ...state,
        percent: Math.round(action.payload * 100),
        rate: lerp(state.range.min, state.range.max, action.payload),
      };
    }

    return state;
  })
  .then(({ percent }) => {
    select<HTMLDivElement>('.speed-bar').style.setProperty('--height', `${percent}%`);
  })
  .then(({ rate }) => {
    select<HTMLDivElement>('.speed-bar').textContent = `${rate.toFixed(1)}x`;
  })
  .then(({ rate }) => {
    select<HTMLVideoElement>('video').playbackRate = rate;
  });
