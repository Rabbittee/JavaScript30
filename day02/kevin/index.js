const hand = {
  hour: document.querySelector(".hour-hand"),
  min: document.querySelector(".min-hand"),
  second: document.querySelector(".second-hand"),
};

function getCurrentTime() {
  const now = new Date();
  return {
    hour: now.getHours(),
    min: now.getMinutes(),
    second: now.getSeconds(),
  };
}

function initHandStyle() {
  hand.hour.style.transformOrigin = "50% 100%";
  hand.min.style.transformOrigin = "50% 100%";
  hand.second.style.transformOrigin = "50% 100%";
}

function setHandDegree(target = "", degree = 0) {
  hand[target].style.transform = `rotate(${degree}deg)`;
}

function getHandsDegree(hour, min, second) {
  // * 以 360 度計算，回傳每單位角度
  const perUnitDegree = (unit) => 360 / unit;

  // * 根據傳入時間，計算各個指針的角度
  const secondDegree = second * perUnitDegree(60);
  const minDegree = min * perUnitDegree(60) + (second * perUnitDegree(60)) / 60;
  const hourDegree = hour * perUnitDegree(12) + (min * perUnitDegree(12)) / 60;

  return {
    hourDegree,
    minDegree,
    secondDegree,
  };
}

function setAllHandsDegree() {
  const { hour, min, second } = getCurrentTime();
  const { hourDegree, minDegree, secondDegree } = getHandsDegree(
    hour,
    min,
    second
  );

  setHandDegree("second", secondDegree);
  setHandDegree("min", minDegree);
  setHandDegree("hour", hourDegree);
}

initHandStyle();
setInterval(setAllHandsDegree, 1000);
