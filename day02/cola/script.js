const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const delta = -90;

function setTime() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = seconds * 6 + delta;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = mins * 6 + seconds / 10 + delta;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = hour * 30 + mins / 2 + delta;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setTime, 1000);

setTime();
