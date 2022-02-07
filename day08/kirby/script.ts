type Vec2 = [number, number];
type Vec3 = [number, number, number];

interface Size {
  width: number;
  height: number;
}

function state<State, Action>(value: State) {
  type DispatchFn = (action: Action) => void;
  type SourceFn = (dispatch: DispatchFn) => void;
  type ReducerFn = (state: State, action: Action) => State;
  type EffectFn = (state: State, action: Action) => void;

  let reducer: ReducerFn = undefined;
  let effects: EffectFn[] = [];

  const subject = {
    then: (effect: EffectFn) => {
      effects.push(effect);

      return subject;
    },
  };

  const combiner = {
    reduce(_reducer: ReducerFn) {
      reducer = _reducer;

      return subject;
    },
  };

  function observe(source: SourceFn) {
    source((action) => {
      value = reducer?.(value, action);

      effects.forEach((effect) => effect(value, action));
    });

    return combiner;
  }

  return { observe };
}

const clamp = (min: number, max: number) => (value: number) => Math.min(max, Math.max(min, value));

const hsl = ([h, s, l]: Vec3) => `hsl(
    ${clamp(0, 360)(h)}, 
    ${clamp(0, 100)(s)}%, 
    ${clamp(0, 100)(l)}%
)`;

const select = <T extends Element>(query: string) => document.querySelector<T>(query);

const setSize =
  ([width, height]: Vec2) =>
  (element: Size) =>
    Object.assign(element, { width, height });

type Context = CanvasRenderingContext2D;

type State = {
  holding: boolean;
  cursor: Vec2;
};

type Action = { type: 'press' } | { type: 'execute'; cursor: Vec2 } | { type: 'release' };

function Drawer() {
  const canvas = select<HTMLCanvasElement>('#draw');
  setSize([window.innerWidth, window.innerHeight])(canvas);

  const context = canvas.getContext('2d');

  context.lineCap = 'round';

  function changeColor(color: string) {
    context.strokeStyle = color;
  }

  function changeSize(size: number) {
    context.lineWidth = size;
  }

  function drawPath([x, y]: Vec2) {
    context.lineTo(x, y);
    context.stroke();
  }

  function move([x, y]: Vec2) {
    context.beginPath();
    context.moveTo(x, y);
  }

  let hue = 0;
  let lineWidth = 0;

  return ({ holding, cursor }: State) => {
    if (holding) {
      drawPath(cursor);
      changeColor(hsl([hue, 100, 50]));
      changeSize(lineWidth);
    }

    move(cursor);
    hue = (hue + 1) % 360;
    lineWidth = (lineWidth + 1) % 100;
  };
}

state<State, Action>({
  holding: false,
  cursor: [0, 0],
})
  .observe((dispatch) => {
    window.addEventListener('pointerdown', () => dispatch({ type: 'press' }));

    window.addEventListener('pointermove', ({ x, y }) =>
      dispatch({ type: 'execute', cursor: [x, y] })
    );

    window.addEventListener('pointerup', () => dispatch({ type: 'release' }));
  })
  .reduce((state, event) => {
    if (event.type === 'press') return { ...state, holding: true };
    if (event.type === 'execute') return { ...state, cursor: event.cursor };
    if (event.type === 'release') return { ...state, holding: false };
  })
  .then(Drawer());
