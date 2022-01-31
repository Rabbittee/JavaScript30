/** 取得現在時間 */
function getCurrentTime(time = new Date()) {
  clockMove(time.getHours(), time.getMinutes(), time.getSeconds());
}

/** 每分鐘、秒鐘各指針移動角度 */
const secPerSecDeg = 360 / 12 / 5;
const minPerSecDeg = 360 / 12 / 5 / 60;
const hourPerMinDeg = 360 / 12 / 5 / 12;

/** 轉動指針 */
const moveDOM = function (element, unitDeg) {
  document.querySelector(element).style.transform = `rotate(${unitDeg}deg)`;
};

/** 變更指針角度 */
function clockMove(hour, min, sec) {
  const hourDeg = 90 + hour * (360 / 12) + min * hourPerMinDeg;
  const minDeg = 90 + min * (360 / 12 / 5) + sec * minPerSecDeg;
  const secDeg = 90 + sec * secPerSecDeg;
  moveDOM('.hour-hand', hourDeg);
  moveDOM('.min-hand', minDeg);
  moveDOM('.second-hand', secDeg);
}

/** 每秒執行一次 */
window.setInterval(getCurrentTime, 1000);
