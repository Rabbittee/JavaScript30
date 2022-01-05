import "./style.css";
import "./src/header";

/**
 * 利用js來讓指針動的跟真的時鐘一樣
 */

const select = (item) => document.querySelector(item);

const hourHand = select(".hour-hand");

const minHand = select(".min-hand");

const secondHand = select(".second-hand");

const timeView = select(".time-value");
const caculateMinutesDeg = (time) => {
  return (time / 60) * 360;
};

const caculateSecondsDeg = (time) => {
  return (time / 60) * 360;
};

const caculateHoursDeg = (time) => {
  return (time / 24) * 360;
};

const getTime = () => {
  const nowTime = new Date();
  timeView.innerHTML = `<span>${getHours(nowTime).hours}:${
    getMinutes(nowTime).minutes
  }:${getSeconds(nowTime).seconds}</span>`;
  secondHand.style.transform = `rotate(${getSeconds(nowTime).deg + 90}deg)`;
  minHand.style.transform = `rotate(${getMinutes(nowTime).deg + 90}deg)`;
  hourHand.style.transform = `rotate(${getHours(nowTime).deg + 90}deg)`;
};

const getHours = (time) => {
  const hours = time.getHours();
  const deg = caculateHoursDeg(hours);
  return { hours, deg };
};

const getMinutes = (time) => {
  const minutes = time.getMinutes();
  const deg = caculateMinutesDeg(minutes);
  return { minutes, deg };
};

const getSeconds = (time) => {
  const seconds = time.getSeconds();
  const deg = caculateSecondsDeg(seconds);
  return { seconds, deg };
};
setInterval(getTime, 1000);
