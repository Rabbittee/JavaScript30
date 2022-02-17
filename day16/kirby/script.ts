const select = <T extends Element>(query: string) => document.querySelector<T>(query);

type Fn<T, R> = (arg: T) => R;

const monad = <T>(value: T) => ({
  map: <R>(fn: Fn<T, R>) => monad(fn(value)),
  unwrap: () => value,
});

type Vec = [
  number, // x
  number // y
];

type Vec4 = [
  number, // x  // r
  number, // y  // g
  number, // w  // b
  number // h  // a
];

const getCenter = ([x, y, w, h]: Vec4) => [w / 2 + x, h / 2 + y] as Vec;
const sub = (v1: Vec, v2: Vec) => [v1[0] - v2[0], v1[1] - v2[1]] as Vec;
const scale = ([x, y]: Vec, f: number) => [x * f, y * f] as Vec;
const rgba = (vec: Vec4) => `rgba(${vec.join()})`;

interface TextShadow {
  offsetX: number;
  offsetY: number;
  radius: number;
  color: string;
}

const textShadow = ({ offsetX, offsetY, radius, color }: TextShadow) =>
  `${offsetX}px ${offsetY}px ${radius}px ${color}`;

const center = monad(select<HTMLDivElement>('.hero'))
  .map((el) => getCenter([el.offsetLeft, el.offsetTop, el.offsetWidth, el.offsetHeight]))
  .unwrap();

const h1 = select<HTMLHeadingElement>('.hero h1');

const Color: Record<string, Vec4> = {
  Red: [256, 0, 256, 0.7],
  LightBlue: [0, 256, 256, 0.7],
  Green: [0, 256, 0, 0.7],
  DarkBlue: [0, 0, 256, 0.7],
};

window.addEventListener('mousemove', (event) => {
  if (!(event instanceof MouseEvent)) return;

  const [x, y] = monad(event)
    .map(({ x, y }) => sub([x, y], center))
    .map((vec) => scale(vec, 0.5))
    .unwrap();

  h1.style.setProperty(
    '--shadow',
    [
      { offsetX: x, offsetY: y, color: Color.Red },
      { offsetX: -x, offsetY: y, color: Color.LightBlue },
      { offsetX: y, offsetY: -x, color: Color.Green },
      { offsetX: -y, offsetY: x, color: Color.DarkBlue },
    ]
      .map((props) =>
        textShadow({
          ...props,
          radius: 0,
          color: rgba(props.color),
        })
      )
      .join()
  );
});
