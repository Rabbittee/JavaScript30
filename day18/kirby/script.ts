const selectAll = <T extends Element>(query: string) =>
  Array.from(document.querySelectorAll<T>(query));

const add = (a: number, b: number) => a + b;

const totalTime = selectAll<HTMLElement>('.videos [data-time]')
  .map((item) => item.dataset.time.split(':').map(Number))
  .map(([min, second]) => min * 60 + second)
  .reduce(add, 0);

const hour = (second: number) => Math.floor(second / (60 * 60));
const min = (second: number) => Math.floor((second % (60 * 60)) / 60);
const sec = (second: number) => second % 60;

console.log(
  hour(totalTime),
  min(totalTime),
  sec(totalTime)
  //
);
