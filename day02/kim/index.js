/** 
 * Target: 每秒鐘改變時鐘樣式  
 */

//  每秒鐘執行
function everySecondChange() {
  changeStyle();
  setTimeout(everySecondChange, 1000);
}
function changeStyle() {
  // 宣告 DOM 元素  
  const second = document.querySelector(".second-hand");
  const min = document.querySelector(".min-hand");
  const hour = document.querySelector(".hour-hand");

  // 呼叫時鐘
  const time = new Date();
  const timeSecond = time.getSeconds() / 60;
  const timeMin = (timeSecond + time.getMinutes()) / 60;
  const timeHour = (timeMin + time.getHours()) / 12;

  /**
   * 對應起來修改
   * 角度
   */
  function setRotation(element, rotationRatio) {
    const angle = rotationRatio * 360 + 90;
    element.style.transform = `rotate(${angle}deg)`;
  }
  setRotation(second, timeSecond);
  setRotation(min, timeMin);
  setRotation(hour, timeHour);
}
setTimeout(everySecondChange, 1000);
