import './style.css';

const select = <T extends HTMLElement>(query: string) => document.querySelector<T>(query);
const selectAll = <T extends HTMLElement>(query: string) =>
  Array.from(document.querySelectorAll<T>(query));

let countdown: number | undefined;

const timerDisplay = select<HTMLElement>('.display__time-left');
const endtimeDisplay = select<HTMLElement>('.display__end-time');
const buttons = selectAll('[data-time]');
const form = select<HTMLFormElement>('form');

function timer(seconds: number) {
  clearInterval(countdown);

  const now = Date.now();

  const then = now + seconds * 1000;

  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }

    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;

  if (!timerDisplay) throw new Error('element is null');

  const display = `${minutes}:${remainderSeconds > 0 ? '' : '0'}${remainderSeconds}`;

  timerDisplay.textContent = display;
}

function displayEndTime(timestamp: number) {
  const endtime = new Date(timestamp);
  const hour = endtime.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = endtime.getMinutes();

  if (!endtimeDisplay) throw new Error('element in null');

  const display = `Be back at ${adjustedHour}:${minutes > 10 ? '' : '0'}${minutes}`;

  endtimeDisplay.textContent = display;
}

function startTimer(e: MouseEvent) {
  const target = <HTMLButtonElement>e.target;
  const time = <string>target.dataset.time;
  const seconds = parseInt(time);

  timer(seconds);
}

//不清楚怎麼解name is not exist
function onSubmit(e: any) {
  e.preventDefault();

  if (!e.target) throw new Error('is null');

  const minutes = e.target.minutes;
  console.log(minutes);
  timer(Number(minutes) * 60);
  form?.reset();
}

buttons.forEach((button) => button.addEventListener('click', startTimer));

if (form) {
  form.addEventListener('submit', onSubmit);
}
