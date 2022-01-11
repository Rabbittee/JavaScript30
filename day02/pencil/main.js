function getCurrentTime() {
  const currentTime = new Date();
  const hour = currentTime.getHours();
  const min = currentTime.getMinutes();
  const sec = currentTime.getSeconds();
  console.log(hour, min, sec);
}

const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secHand = document.querySelector('.sec-hand');

// function setClock(timeRegulation = 'hour', count) {
//   const deg = 360 / 12 / 5;
//   const secondMoving = Infinity;
//   switch (timeRegulation) {
//     case 'hour':
//       secondMoving = 360 / 12;
//       break;
//     case 'minute':
//       deg = 360
//   }
// }

hourHand.style.transform = 'rotate(90deg)';

window.setInterval((
  () => getCurrentTime(new Date())
), 1000)