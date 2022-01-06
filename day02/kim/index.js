/**
 * 每秒鐘改變時鐘樣式
 */

/**
 * 每秒鐘執行
 */
function everySecondChange() {
  changeStyle();
  // nowTime();
  setTimeout(everySecondChange, 1000);
}
setTimeout(everySecondChange, 1000);

function changeStyle() {
  /**
   * 呼叫時鐘
   */
  // hour
  // min
  // second
  const date = new Date();
  const dateSecond = date.getSeconds();

  /**
   * 呼叫樣式
   * 變更樣式
   */
  const hour = document.querySelector(".hour-hand");
  // console.log((hour.style.transform = `rotate(${dateSecond}deg)`));
  // hour.style.transform = "rotate(20deg)";
  hour.style.transform = `rotate(${dateSecond}deg)`;

  const min = document.querySelector(".min-hand");
  const second = document.querySelector(".second-hand");
}

// function nowTime() {
//   /**
//    * 呼叫時鐘
//    */
//   // hour
//   // min
//   // second
//   const date = new Date();
//   const dateSecond = date.getSeconds();
//   console.log(dateSecond);
// }

/**
 * 對應起來修改
 */
