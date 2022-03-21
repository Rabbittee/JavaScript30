const select = (DOM) => document.querySelector(DOM);
const selectAll = (DOM) => document.querySelectorAll(DOM);

// get DOM element
const timerButtons = selectAll('.timer__button');
const timerInput = select('input[name="minutes"]');
const timeLeft = select('.display__time-left');
const endTimeDom = select('.display__end-time');

const handleZero = (num) => {
  return num < 10 ? '0' + String(num) : String(num);
};

const renderDom = (timeObj) => {
  return {
    timeLeft: () => {
      const { minutes, seconds } = timeObj;
      timeLeft.textContent = `${handleZero(minutes)}:${handleZero(seconds)}`;
    },
    endTime: () => {
      const { hours, minutes, seconds } = timeObj;
      endTimeDom.textContent = `
        Be back at  ${handleZero(hours)}:${handleZero(minutes)}:${handleZero(seconds)}
      `;
    },
  };
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

  // if timeout, clear interval api
  if (distance < 1) clearInterval(interval);

  const timeObj = {
    minutes: getTimer(distance).min(),
    seconds: getTimer(distance).sec(),
  };
  // renderTimeLeft(timeObj);
  renderDom(timeObj).timeLeft();
};

let interval;
const handleTimer = (e) => {
  // make interval reset
  clearInterval(interval);

  // check input or button
  const countSec = e.type === 'click' ? e.target.dataset.time : e.target.value * 60;

  const startTime = new Date().getTime();
  const endTime = startTime + countSec * 1000;

  // if set 1000, that will be late one second
  interval = window.setInterval(`countDown(${endTime})`, 900);

  const timeLeftContent = {
    minutes: getTimer(countSec).min(),
    seconds: getTimer(countSec).sec(),
  };
  renderDom(timeLeftContent).timeLeft();

  // render started time setting
  const endTimeContent = {
    hours: new Date(endTime).getHours(),
    minutes: new Date(endTime).getMinutes(),
    seconds: new Date(endTime).getMinutes(),
  };
  renderDom(endTimeContent).endTime();
};

timerButtons.forEach((button) => button.addEventListener('click', handleTimer));
timerInput.addEventListener('input', handleTimer);
