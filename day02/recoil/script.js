const $ = (target) => document.querySelector(target);

const degree = (time = 0) => `transform: rotateZ(${time + 90}deg);`;

const hourElement = $(".hour-hand");
const minuteElement = $(".min-hand");
const secondElement = $(".second-hand");
const secondDeg = 360 / (30 * 2);
const minuteDeg = 360 / 30;
const hourDegree = 360 / 12;

setInterval(() => {
  const now = new Date();
  secondElement.style = degree(now.getSeconds() * secondDeg);
  minuteElement.style = degree(now.getMinutes() * minuteDeg);
  hourElement.style = degree(now.getHours() * hourDegree);
}, 1000);