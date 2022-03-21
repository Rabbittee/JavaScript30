const select = (selector) => document.querySelector(selector);

const padTwoDigit = (num) => String(num).padStart(2, '0');

const updateDocTitle = (newTitle) => (document.title = newTitle);

const updateTextContent = (selector, newText = '') => (select(selector).textContent = newText);

function displayTime(leftSecond) {
  if (typeof leftSecond !== 'number') {
    throw new TypeError('leftSecond must be a number');
  }
  if (window._setTimeoutId !== undefined) {
    clearTimeout(window._setTimeoutId);
  }

  function displayEndTime(second) {
    const { hour, minute } = getTimeOffset(second);
    const endTime = `${hour}:${padTwoDigit(minute)}`;
    updateTextContent('.display__end-time', `Be Back At ${endTime}`);
  }

  function displayTimeLeft(second) {
    if (second < 0) return;
    const leftMin = Math.floor(second / 60);
    const leftSec = padTwoDigit(second % 60);
    const leftTime = `${leftMin}:${leftSec}`;

    updateTextContent('.display__time-left', leftTime);
    updateDocTitle(leftTime);

    window._setTimeoutId = setTimeout(() => {
      displayTimeLeft(second - 1);
    }, 1000);
  }

  displayEndTime(leftSecond);
  displayTimeLeft(leftSecond);
}

function getTimeOffset(offsetSeconds) {
  if (typeof offsetSeconds !== 'number') throw new TypeError('offsetSeconds must be a number');
  const now = new Date();
  const offsetMinute = now.getMinutes() + Math.ceil(offsetSeconds / 60);
  const offsetHour = now.getHours() + Math.ceil(offsetMinute / 60);

  return {
    minute: offsetMinute % 60,
    hour: offsetHour % 24,
  };
}

select('.timer__controls').addEventListener('click', (e) => {
  const dataTime = Number(e.target.dataset.time);
  const btn = e.target.closest('.timer__button');
  if (btn === null) return;

  displayTime(dataTime);
});

select('#custom').addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const leftSeconds = formData.get('minutes') * 60;

  displayTime(leftSeconds);
  e.target.reset();
});
