const select = (DOM) => document.querySelector(DOM);
const selectAll = (DOM) => document.querySelectorAll(DOM);

const timerButtons = selectAll('.timer__button');
const timerInput = select('input[name="minutes"]');
const timeLeft = select('.display__time-left');
const endTimeDom = select('.display__end-time');

const rendering = (timeObj) => {
  const { minutes, seconds } = timeObj;
  timeLeft.textContent = `${minutes} : ${seconds}`;
};

const getTimer = (countSec) => {
  return {
    min: () => Math.floor(countSec / 60),
    sec: () => countSec % 60,
  };
};

const countDown = (endTime) => {
  const currentTime = new Date().getTime();
  const distance = Math.floor((endTime - currentTime) / 1000);

  if (distance < 1) clearInterval(interval);

  const timeObj = {
    minutes: getTimer(distance).min(),
    seconds: getTimer(distance).sec(),
  };
  console.log(timeObj);
  rendering(timeObj);
};

let interval;
const handleTimer = (e) => {
  clearInterval(interval);
  const countSec = e.type === 'click' ? e.target.dataset.time : e.target.value * 60;
  const startTime = new Date().getTime();
  const endTime = startTime + countSec * 1000;

  interval = window.setInterval(`countDown(${endTime})`, 900);

  const startMin = getTimer(countSec).min();
  const startSec = getTimer(countSec).sec();

  timeLeft.textContent = `${startMin} : ${startSec}`;
  endTimeDom.textContent = `
    Be back at
    ${new Date(endTime).getHours()} :
    ${new Date(endTime).getMinutes()} :
    ${new Date(endTime).getSeconds()}
  `;
};

timerButtons.forEach((button) => button.addEventListener('click', handleTimer));
timerInput.addEventListener('input', handleTimer);
