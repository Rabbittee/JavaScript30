const timeAry = [...document.querySelectorAll('.videos li[data-time]')].map(
  (element) => element.dataset.time
);

const dealNextDigit = (prev, next, max = 60) => {
  if (prev > max - 1) {
    prev -= 60;
    next += 1;
  }
  return [prev, next];
};

const initTime = [0, 0, 0];
const result = timeAry.reduce(([hour, min, sec], time) => {
  const [currentMin, currentSec] = time.split(':');

  sec += Number(currentSec);
  min += Number(currentMin);

  [sec, min] = dealNextDigit(sec, min);
  [min, hour] = dealNextDigit(min, hour);

  return [hour, min, sec];
}, initTime);

console.log(result);
