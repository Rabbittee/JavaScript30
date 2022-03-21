/*
 * @Author:Claire Li
 * @Date:2022-03-20 15:50:12
 * @LastEditors:Claire Li
 * @LastEditTime:2022-03-21 23:27:17
 * @Description:
 */
const select: Function = (query: string): HTMLElement => document.querySelector(query);
const selectEvery: Function = (query: string): NodeList => document.querySelectorAll(query);
let timer: number;

function countdown(secs: number): void {
  display(secs);

  timer = window.setInterval(() => {
    if (secs === 1) clearInterval(timer);

    secs--;

    display(secs);
  }, 1000);
}

function display(seconds: number): void {
  const hours: number = Math.floor(seconds / 3600);
  let remainderSeconds: number = seconds % 3600;
  const minutes: number = Math.floor(remainderSeconds / 60);
  remainderSeconds = seconds % 60;

  select('.display__time-left').innerText = `
    ${hours < 10 ? showTens(hours) : hours}:${minutes < 10 ? showTens(minutes) : minutes}:${
    remainderSeconds < 10 ? showTens(remainderSeconds) : remainderSeconds
  }
  `;
}

function showTens(number: number): string {
  return '0' + number;
}

selectEvery('[data-time]').forEach((btn) => {
  btn.addEventListener('click', (e: Event) => {
    clearInterval(timer);
    if (e !== null && e.target instanceof HTMLButtonElement) {
      const targetSec = Number(e.target.dataset.time);
      countdown(targetSec);
    }
  });
});

select('#custom').addEventListener('submit', (e: Event) => {
  e.preventDefault();
  clearInterval(timer);
  if (e !== null && e.target[0] instanceof HTMLInputElement) {
    const targetSec = Number(e.target[0].value) * 60;
    countdown(targetSec);
    e.target[0].value = '';
  }
});
