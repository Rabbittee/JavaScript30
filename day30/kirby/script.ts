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

const selectAll = <T extends Element>(query: string) =>
  Array.from(document.querySelectorAll<T>(query));

function randomBetween<T extends number>(min: number, max: number): T {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min) as T;
}

const randomPick = <T>(list: T[]) => list[randomBetween(0, list.length - 1)];

const positive = (value: number) => Math.max(value, 0);

const second = (value: number) => value * 1000;

type Fn<T, R> = (arg: T) => R;
const frameUpdate = (fn: Fn<number, void>) => {
  const start = performance.now();

  return requestAnimationFrame(() => {
    const current = performance.now();

    fn(current - start);
  });
};

type State = {
  // constant
  totalTime: number;
  holes: number[];
  randomTimeRange: { min: number; max: number };

  // variable
  restTime: number;
  nextPeep: number;
  timer?: number;
  currentHole?: number;
  scores: number;
};

type Action =
  | { type: 'start' }
  | { type: 'timer'; timer: number }
  | { type: 'countdown'; deltaTime: number }
  | {
      type: 'peep';
      hole: State['holes'][0];
      nextPeep: number;
    }
  | { type: 'bonk'; hole: State['holes'][0] };

state<State, Action>({
  totalTime: second(10),
  holes: [1, 2, 3, 4, 5, 6],
  randomTimeRange: { min: 200, max: 1000 },

  restTime: 0,
  nextPeep: 0,
  timer: undefined,
  currentHole: undefined,
  scores: 0,
})
  .observe((state, dispatch) => {
    select<HTMLButtonElement>('button')
      //
      .addEventListener('click', () => dispatch({ type: 'start' }));

    state.holes.forEach((id) =>
      select<HTMLDivElement>(`.hole${id} .mole`)
        //
        .addEventListener('click', () => dispatch({ type: 'bonk', hole: id }))
    );
  })
  .reduce((state, action) => {
    if (action.type === 'start') {
      return { ...state, restTime: state.totalTime, scores: 0 };
    }

    if (action.type === 'bonk') {
      return { ...state, scores: state.scores + 1 };
    }

    if (action.type === 'timer') {
      return { ...state, timer: action.timer };
    }

    if (action.type === 'countdown') {
      return {
        ...state,
        timer: undefined,
        restTime: positive(state.restTime - action.deltaTime),
        nextPeep: positive(state.nextPeep - action.deltaTime),
      };
    }

    if (action.type === 'peep') {
      return { ...state, nextPeep: action.nextPeep, currentHole: action.hole };
    }

    return state;
  })
  .then((state, action, dispatch) => {
    if (action.type === 'start') {
      cancelAnimationFrame(state.timer);

      dispatch({
        type: 'timer',
        timer: frameUpdate((deltaTime) => dispatch({ type: 'countdown', deltaTime })),
      });
    }
  })
  .then((state, action, dispatch) => {
    if (state.restTime > 0 && action.type === 'countdown') {
      dispatch({
        type: 'timer',
        timer: frameUpdate((deltaTime) => dispatch({ type: 'countdown', deltaTime })),
      });
    }
  })
  .then((state, _action, dispatch) => {
    if (state.restTime <= 0 || state.nextPeep > 0) return;

    dispatch({
      type: 'peep',
      hole: randomPick(state.holes),
      nextPeep: randomBetween(state.randomTimeRange.min, state.randomTimeRange.max),
    });
  })
  .then((state) => {
    if (!state.currentHole) return;

    selectAll<HTMLDivElement>(`.hole`)
      //
      .forEach((hole) =>
        hole.classList.toggle(
          'up',
          hole.matches(`.hole${state.currentHole}`)
          //
        )
      );
  })
  .then((state) => {
    if (state.restTime <= 0) {
      selectAll<HTMLDivElement>(`.hole`)
        //
        .forEach((hole) => hole.classList.remove('up'));
    }
  })
  .then((_state, action) => {
    if (action.type === 'bonk') {
      select<HTMLDivElement>(`.hole${action.hole}`)?.classList.remove('up');
    }
  })
  .then((state, action) => {
    if (action.type === 'bonk') {
      select('.score').textContent = String(state.scores);
    }
  });
