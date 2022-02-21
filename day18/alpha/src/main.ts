import './style.css';

const selectAll = <T extends HTMLElement>(query: string) =>
  Array.from(document.querySelectorAll<T>(query));

const videos = selectAll<HTMLElement>('.videos [data-time]');

const totalTime = videos
  .map((item: HTMLOrSVGElement) => item.dataset.time.split(':').map(Number))
  .map(([minute, second]) => minute * 60 + second)
  .reduce((acc: number, cur: number) => acc + cur, 0);

console.log(totalTime);

const getHour = (time: number) => Math.floor(time / 3600);

const getMinute = (time: number) => Math.floor((time % 3600) / 60);

const getSecond = (time: number) => time % 60;

console.log(
  'Hour:',
  getHour(totalTime),
  'Minute:',
  getMinute(totalTime),
  'Second:',
  getSecond(totalTime)
);
