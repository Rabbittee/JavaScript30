import "./style.css";
import "./src/header";

/**
 * 利用js來讓指針動的跟真的時鐘一樣
 */

//select DOM
const select = (item) => document.querySelector(item);

//caculate degree
const caculateDeg = (time, denominator) => {
  return (time / denominator) * 360;
};

//add rotate style of clock's hand
const rotate = (element, getDeg) => {
  element.style.transform = `rotate(${getDeg + 90}deg)`;
};

//get whole clock action
const getClock = () => {
  const nowTime = new Date();
  const hourHand = { element: select(".hour-hand"), value: nowTime.getHours() };

  const minHand = { element: select(".min-hand"), value: nowTime.getMinutes() };

  const secondHand = {
    element: select(".second-hand"),
    value: nowTime.getSeconds(),
  };

  const timeView = select(".time-value");
  timeView.innerHTML = `<span>${hourHand.value}:${minHand.value}:${secondHand.value}</span>`;

  rotate(hourHand.element, caculateDeg(hourHand.value * 2, 24));
  rotate(minHand.element, caculateDeg(minHand.value, 60));
  rotate(secondHand.element, caculateDeg(secondHand.value, 60));
};

//do again pre second
setInterval(getClock, 1000);
