const $ = (target) => document.querySelector(target);

const degree = (time = 0) => `transform: rotateZ(${time + 90}deg);`;

const hourElement = $(".hour-hand");
const minuteElement = $(".min-hand");
const secondElement = $(".second-hand");
const sixDeg = 360 / 60;
const minuteDeg = 30 / 60;
const hourDegree = 360 / 12;

setInterval(() => {
  const now = new Date();
  secondElement.style = degree(now.getSeconds() * sixDeg);
  minuteElement.style = degree(now.getMinutes() * sixDeg);
  hourElement.style = degree((now.getHours() * hourDegree)+(now.getMinutes() * minuteDeg));
}, 1000);