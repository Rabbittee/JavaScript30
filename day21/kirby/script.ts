const select = <T extends Element>(qs: string) => document.querySelector<T>(qs);

type Fn<T, R> = (arg: T) => R;
const tap = <T>(fn: Fn<T, void>) => (arg: T) => (fn(arg), arg);
const monad = <T>(value: T) => ({
  map: <R>(fn: Fn<T, R>) => monad(fn(value)),
  unwrap: () => value,
});

const renderSpeed = (data: GeolocationPosition) =>
  (select(".speed-value").textContent = String(data.coords.speed));

const updateArrow = (data: GeolocationPosition) =>
  (select<SVGAElement>(
    ".arrow"
  ).style.transform = `rotate(${data.coords.heading}deg)`);

navigator.geolocation.watchPosition(
  (data) =>
    monad(data)
      //
      .map(tap(renderSpeed))
      .map(tap(updateArrow)),
  (err) => console.error(err)
);
