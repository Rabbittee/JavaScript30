const hourTarget = document.querySelector('.hour-hand');
const minTarget = document.querySelector('.min-hand');
const secTarget = document.querySelector('.second-hand');
const regularHand = 90;
// 調整時針、分針、秒針的指針位置
const handStyle = (hand) => (hand.style.transformOrigin = 'right');

const getTime = () => {
  // 獲取時針、分針、秒針時間
  const date = new Date();
  const hour = date.getHours() % 12;
  const min = date.getMinutes();
  const sec = date.getSeconds();
  return { hour, min, sec };
};

const handAngle = (grid, time) => (360 / grid) * time;

const getAngle = (hour, min, sec) => {
  // 計算時針、分針、秒針角度，時鐘初始位置為 -90 度，所以要正規化時鐘位置
  const hourAngle = handAngle(12, hour) + handAngle(12, min) / 60 + regularHand;
  const minAngle = handAngle(60, min) + regularHand;
  const secAngle = handAngle(60, sec) + regularHand;
  return { hourAngle, minAngle, secAngle };
};

const clockStyle = (hour, min, sec) => {
  // css style
  hourTarget.style.transform = `rotate(${hour}deg)`;
  minTarget.style.transform = `rotate(${min}deg)`;
  secTarget.style.transform = `rotate(${sec}deg)`;
};

function handleEvent() {
  handStyle(hourTarget);
  handStyle(minTarget);
  handStyle(secTarget);
  const { hour, min, sec } = getTime();
  const { hourAngle, minAngle, secAngle } = getAngle(hour, min, sec);
  clockStyle(hourAngle, minAngle, secAngle);
}

setInterval(handleEvent, 1000);
