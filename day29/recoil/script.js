const select = (target) => document.querySelector(target);
const controls = select('.timer__controls');
const customTime = select('#custom');
const timerDisplay = select('.display__time-left');
const endTime = select('.display__end-time');
const date = new Date();
function timer(update, timeup) {
  let timer;
  return function (seconds) {
    const date = new Date();
    const time = date.getTime();
    if (timer) clearInterval(timer);
    const endTime = time + seconds * 1000;
    timer = setInterval(() => {
      const leftTime = endTime - Date.now();
      if (leftTime < 0) {
        clearInterval(timer);
        timeup();
      } else {
        update(leftTime);
      }
    }, 1000);
  };
}

function cond(exec, success, failed) {
  return function (value) {
    return exec(value) ? success(value) : failed(value);
  };
}

function toTimeSchema(value) {
  const seconds = Math.round(value / 1000) % 60,
    minutes = Math.floor(value / (60 * 1000)) % 60,
    hours = Math.floor(value / 1000) % 12;
  return {
    seconds,
    minutes,
    hours,
  };
}

const tick = cond(
  (value) => value < 10,
  (value) => '0' + value,
  (value) => value
);

function updateView(time) {
  const { seconds, minutes } = toTimeSchema(time);
  timerDisplay.textContent = `${tick(minutes)}:${tick(seconds)}`;
}

function handleTimeUp() {
  timerDisplay.textContent = 'time up';
}

const setTimer = timer(updateView, handleTimeUp);

function handleClickTime({ target }) {
  if (target.classList.contains('timer__button')) {
    setTimer(target.dataset.time);
    const { seconds, minutes, hours } = toTimeSchema(target.dataset.time * 1000);
    console.log(target.dataset.time * 1000);
    endTime.textContent = `
      Be Back At ${tick(date.getHours() + hours)}:${tick(date.getMinutes() + minutes)}:${tick(
      date.getSeconds() + seconds
    )}
    `;
  }
}

function handleForm(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const minutes = formData.get('minutes');
  if (minutes && minutes < 0) return;
  const seconds = minutes * 60;
  setTimer(seconds);
  const schema = toTimeSchema(seconds * 1000);
  endTime.textContent = `
  Be Back At ${tick(date.getHours() + schema.hours)}:${tick(
    date.getMinutes() + schema.minutes
  )}:${tick(date.getSeconds() + schema.seconds)}
  `;
}

customTime.addEventListener('submit', handleForm);
controls.addEventListener('click', handleClickTime);
