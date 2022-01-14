// 縮短秒針
document.querySelector(".hour-hand").style.width = "30%";
document.querySelector(".hour-hand").style.left = "21%";
document.querySelector(".hour-hand").style.top = "49%";

// 取得當前時間
function getNowTime() {
  let now_date = new Date();
  const now_date_arr = String(now_date).split(" ");
  const now_time_arr = now_date_arr[4].split(":");

  return now_time_arr;
}

// 旋轉指針
function rotate(target, deg) {
  target.style.webkitTransform = `rotate('${deg}deg')`;
  target.style.mozTransform = `rotate('${deg}deg')`;
  target.style.msTransform = `rotate('${deg}deg')`;
  target.style.oTransform = `rotate('${deg}deg')`;
  target.style.transform = `rotate(${deg}deg)`;
}

// 計算指針旋轉角度
function calAngle() {
  // 取得當前時間
  const now_time_arr = getNowTime();
  const now_hour = now_time_arr[0];
  const now_min = now_time_arr[1];
  const now_sec = now_time_arr[2];

  // 計算旋轉角度
  const hr_deg = 90 + (360 / 12 / 60 / 60) * now_hour * 60 * 60;
  const min_deg = 90 + (360 / 60 / 60) * now_min * 60;
  const sec_deg = 90 + (360 / 60) * now_sec;

  // 取得節點
  const hour_hand_div = document.querySelector(".hour-hand");
  const min_hand_div = document.querySelector(".min-hand");
  const second_hand_div = document.querySelector(".second-hand");

  // 旋轉
  rotate(hour_hand_div, hr_deg);
  rotate(min_hand_div, min_deg);
  rotate(second_hand_div, sec_deg);
}

// 定時刷新時間
setInterval(calAngle, 1000);
