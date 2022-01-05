const lerp = (x1: number, x2: number, t: number) => x1 * (1 - t) + x2 * t;

const select = (query: string) => document.querySelector<HTMLElement>(query);

const setRotate = (element: HTMLElement, value: number) =>
  element.style.setProperty("--rotate", `${90 + value}deg`);

type Fn<T, R> = (arg: T) => R;

type Subject = {
  hour: Fn<Date, void>;
  min: Fn<Date, void>;
  second: Fn<Date, void>;
};
function every(ms: number, update: Subject) {
  const current = new Date();

  update.hour(current);
  update.min(current);
  update.second(current);

  setTimeout(() => every(ms, update), ms);
}

every(1000, {
  hour: (time: Date) =>
    setRotate(select(".hour-hand"), lerp(0, 360, time.getHours() / 24)),

  min: (time: Date) =>
    setRotate(select(".min-hand"), lerp(0, 360, time.getMinutes() / 60)),

  second: (time: Date) =>
    setRotate(select(".second-hand"), lerp(0, 360, time.getSeconds() / 60)),
});
