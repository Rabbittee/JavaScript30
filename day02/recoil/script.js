const fixDegree = 90;
const tickDegree = 6;
const minuteDegree = 0.5;
const hourDegree = 30;

const $ = (target) => document.querySelector(target);
const rotateZ = (degree = 0) => `transform: rotateZ(${degree + fixDegree}deg);`;

const hourElement = $('.hour-hand');
const minuteElement = $('.min-hand');
const secondElement = $('.second-hand');

setInterval(() => {
  const now = new Date();

  const secondTick = now.getSeconds() * tickDegree;
  const minuteTick = now.getMinutes() * tickDegree;
  const hourTick = now.getHours() * hourDegree + now.getMinutes() * minuteDegree;

  secondElement.style = rotateZ(secondTick);
  minuteElement.style = rotateZ(minuteTick);
  hourElement.style = rotateZ(hourTick);
}, 1000);
