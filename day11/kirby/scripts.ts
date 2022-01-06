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

const select = <T extends Element>(query: string) =>
  document.querySelector<T>(query);

const selectAll = <T extends Element>(query: string) =>
  Array.from(document.querySelectorAll<T>(query));

type Constructor = new (..._: any) => any;
function is<T extends Constructor>(type: T) {
  return function (value: any): value is InstanceType<T> {
    return value instanceof type;
  };
}

const lerp = (x1: number, x2: number, t: number) => x1 * (1 - t) + x2 * t;
const percentage = (x1: number, x2: number) => (x1 / x2) * 100;

type State = {
  playing: boolean;
  volume: number;
  playbackRate: number;
  progress: number;
  video: HTMLVideoElement;
  progressBar: HTMLDivElement;
};
type Action =
  | { type: "toggle" }
  | { type: "volume"; value: number }
  | { type: "playbackRate"; value: number }
  | { type: "progress"; value: number }
  | { type: "updateProgress"; value: number };

state<State, Action>({
  playing: false,
  volume: 1,
  playbackRate: 1,
  progress: 0,
  video: select(".player video"),
  progressBar: select(".player .progress__filled"),
})
  .observe((dispatch) => {
    selectAll(".player .viewer, .player .toggle")
      //
      .forEach((el) =>
        el.addEventListener("click", () => dispatch({ type: "toggle" }))
      );

    selectAll(".player input[type=range]")
      //
      .forEach((el) =>
        el.addEventListener("input", ({ target }) => {
          if (!is(HTMLInputElement)(target)) return;

          if (target.name === "volume")
            return dispatch({
              type: "volume",
              value: Number(target.value),
            });

          if (target.name === "playbackRate")
            return dispatch({
              type: "playbackRate",
              value: Number(target.value),
            });
        })
      );

    select(".player .viewer")
      //
      .addEventListener("timeupdate", ({ target }) => {
        if (!is(HTMLVideoElement)(target)) return;

        return dispatch({
          type: "progress",
          value: Math.floor(percentage(target.currentTime, target.duration)),
        });
      });

    select(".player .progress")
      //
      .addEventListener("click", (e) => {
        if (!is(PointerEvent)(e)) return;

        const target = e.currentTarget;
        if (!is(HTMLDivElement)(target)) return;

        return dispatch({
          type: "updateProgress",
          value: Math.floor(percentage(e.offsetX, target.clientWidth)),
        });
      });

    selectAll(".player button")
      //
      .forEach((el) =>
        el.addEventListener("click", ({ target }) => {
          if (!is(HTMLButtonElement)(target)) return;

          const { currentTime, duration } = select<HTMLVideoElement>(
            ".player video"
          );

          const value = currentTime + Number(target.dataset.skip);

          return dispatch({
            type: "updateProgress",
            value: Math.floor(percentage(value, duration)),
          });
        })
      );
  })
  .reduce((state, action) => {
    if (action.type === "toggle") return { ...state, playing: !state.playing };

    if (action.type === "volume") return { ...state, volume: action.value };

    if (action.type === "playbackRate")
      return { ...state, playbackRate: action.value };

    if (action.type === "progress") return { ...state, progress: action.value };

    return state;
  })
  .then(
    (
      { playing, progress, progressBar, video, volume, playbackRate },
      action
    ) => {
      playing ? video.play() : video.pause();

      video.playbackRate = playbackRate;
      video.volume = volume;

      progressBar.style.flexBasis = `${progress}%`;

      if (action.type === "updateProgress")
        video.currentTime = lerp(0, video.duration, action.value / 100);
    }
  );
