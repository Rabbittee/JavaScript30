type DispatchFn<Action> = (action: Action) => void;
type SourceFn<State, Action> = (state: State, dispatch: DispatchFn<Action>) => void;
type ReducerFn<State, Action> = (state: State, action: Action) => State;
type EffectFn<State, Action> = (state: State, action: Action, dispatch: DispatchFn<Action>) => void;

function state<State, Action>(value: State) {
  let reducer: ReducerFn<State, Action> = undefined;
  let effects: EffectFn<State, Action>[] = [];

  const subject = {
    then: (effect: EffectFn<State, Action>) => {
      effects.push(effect);

      return subject;
    },
  };

  const combiner = {
    ...subject,
    reduce(_reducer: ReducerFn<State, Action>) {
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

  function observe(source: SourceFn<State, Action>) {
    queueMicrotask(() => source(value, dispatch));

    return combiner;
  }

  return { observe };
}

type Fn<T, R> = (arg: T) => R;
const tap =
  <T>(fn: Fn<T, any>) =>
  (value: T) => (fn(value), value);
const map =
  <T, R>(fn: Fn<T, R>) =>
  (list: T[]) =>
    list.map(fn);
const join =
  <T>(token: string) =>
  (list: T[]) =>
    list.join(token);

const functor = <T>(value: T) => ({
  map: <R>(fn: Fn<T, R>) => functor(fn(value)),
});

const select = <T extends Element>(query: string) => document.querySelector<T>(query);

const selectAll = <T extends Element>(query: string) =>
  Array.from(document.querySelectorAll<T>(query));

type State = {
  timer?: number;
  rest: number;
};
type Action =
  | { type: 'initial'; rest: number }
  | { type: 'countdown'; timer: number }
  | { type: 'reset' };

const time = {
  second: (time: number | string) => Number(time) * 1000,
  minute: (time: number | string) => Number(time) * 1000 * 60,
};

const form = (element: HTMLFormElement) => (key: string) => String(new FormData(element).get(key));

const padStart = (length: number, fill: string) => (value: number) =>
  String(value).padStart(length, fill);

const assign =
  <T extends {}, K extends keyof T>(target: T, key: K) =>
  (value: T[K]) =>
    Object.assign(target, { [key]: value });

const timeFormat = (ms: number) => new Date(ms).toTimeString();

const clearTimer: EffectFn<State, Action> = (state, _action, dispatch) => {
  if (state.timer && state.rest === 0) {
    clearTimeout(state.timer);

    dispatch({ type: 'reset' });
  }
};

const nextTick: EffectFn<State, Action> = (state, _action, dispatch) => {
  if (state.rest <= 0) return;

  const timer = setTimeout(() => dispatch({ type: 'countdown', timer }), time.second(1));
};

const displayTimeLeft: EffectFn<State, Action> = (state) =>
  functor(state)
    .map(({ rest }) => new Date(rest))
    .map((date) => [date.getUTCMinutes(), date.getUTCSeconds()])
    .map(map(padStart(2, '0')))
    .map(join(':'))
    .map(tap(assign(select('.display__time-left'), 'textContent')))
    .map(tap(assign(document, 'title')));

const displayEndTime: EffectFn<State, Action> = (state) =>
  functor(state)
    .map(({ rest }) => new Date(Date.now() + rest))
    .map((date) => [date.getHours(), date.getMinutes()])
    .map(map(padStart(2, '0')))
    .map(join(':'))
    .map((time) => `Be Back At ${time}`)
    .map(tap(assign(select('.display__end-time'), 'textContent')));

state<State, Action>({
  timer: undefined,
  rest: 0,
})
  .observe((_, dispatch) => {
    selectAll<HTMLButtonElement>('[data-time]')
      //
      .forEach((button) =>
        button.addEventListener('click', () =>
          dispatch({
            type: 'initial',
            rest: time.second(button.dataset['time']),
          })
        )
      );

    select<HTMLFormElement>('#custom')
      //
      .addEventListener('submit', (e) => {
        e.preventDefault();
        if (!(e.target instanceof HTMLFormElement)) return;

        dispatch({
          type: 'initial',
          rest: time.minute(form(e.target)('minutes')),
        });
      });
  })
  .reduce((state, action) => {
    if (action.type === 'initial') {
      return { ...state, rest: action.rest };
    }

    if (action.type === 'reset') {
      return { ...state, timer: undefined };
    }

    if (action.type === 'countdown') {
      return {
        ...state,
        rest: state.rest - time.second(1),
        timer: action.timer,
      };
    }

    return state;
  })
  .then(displayTimeLeft)
  .then(displayEndTime)
  .then(clearTimer)
  .then(nextTick);
