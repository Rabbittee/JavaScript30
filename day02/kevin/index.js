(function () {
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
    const targetElement = hand[target];
    if (targetElement === undefined)
      throw 'parameter "target" is not defined in hand (object)';
    targetElement.style.transform = `rotate(${degree}deg)`;
  }

  function setAllHandsDegree() {
    const { hour, min, second } = getCurrentTime();

    // * 以 360 度計算，回傳每單位角度
    const perUnitDegree = (unit) => 360 / unit;
    // * 每秒鐘 分針額外增加的角度
    const minOffsetPerSecond = perUnitDegree(60) / 60;
    // * 每分鐘 時針額外增加的角度
    const hourOffsetPerMin = perUnitDegree(12) / 60;

    setHandDegree("second", second * perUnitDegree(60));
    setHandDegree("min", min * perUnitDegree(60) + second * minOffsetPerSecond);
    setHandDegree("hour", hour * perUnitDegree(12) + min * hourOffsetPerMin);
  }

  initHandStyle();
  setInterval(setAllHandsDegree, 1000);
})();
