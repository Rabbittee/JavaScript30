import './style.css';
import './src/header';

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
  //get now time
  const nowTime = new Date();

  //create clock hand's object about element and time value
  const hourHand = { element: select('.hour-hand'), value: nowTime.getHours() };

  const minHand = { element: select('.min-hand'), value: nowTime.getMinutes() };

  const secondHand = {
    element: select('.second-hand'),
    value: nowTime.getSeconds(),
  };

  //add about string to format time value
  hourHand.string = hourHand.value < 10 ? '0' + hourHand.value : hourHand.value;
  minHand.string = minHand.value < 10 ? '0' + minHand.value : minHand.value;
  secondHand.string = secondHand.value < 10 ? '0' + secondHand.value : secondHand.value;

  //view time string
  const timeView = select('.time-value');
  timeView.innerHTML = `<span>${hourHand.string}:${minHand.string}:${secondHand.string}</span>`;

  //do rotate about clock hands
  rotate(
    hourHand.element,
    caculateDeg(hourHand.value + minHand.value / 60 + secondHand.value / 3600, 12)
  );
  rotate(minHand.element, caculateDeg(minHand.value + secondHand.value / 60, 60));
  rotate(secondHand.element, caculateDeg(secondHand.value, 60));
};

//do again pre second
setInterval(getClock, 1000);
