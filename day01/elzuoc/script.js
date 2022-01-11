// 取得鍵盤輸入並轉換
const getKeyCode = (e) => {
  return e.key.toUpperCase().charCodeAt();
};

// 移除 .playing 轉場效果
const removeTransition = () => {
  const getDomArr = document.querySelectorAll(".playing");

  getDomArr.forEach((current, idx) => {
    // 監聽 轉場結束事件
    current.addEventListener("transitionend", () => {
      current.classList.remove("playing");

      // tips:若改為長音效，可藉由調整css中.playing轉場時間改變轉場事件長度
    });
  });
};

// 加入 .playing 轉場效果
const setDivClass = (el) => {
  el.classList.add("playing");
};

// 撥放音效 & 效果
const playAudio = (e) => {
  const key_code = getKeyCode(e);

  // 取得對應鍵盤輸入的audio與div
  let audioDom = document.querySelector(`audio[data-key='${key_code}']`);
  let keyDom = document.querySelector(`div[data-key='${key_code}']`);

  if (!audioDom || !keyDom) return;

  setDivClass(keyDom);
  removeTransition(keyDom);
  audioDom.currentTime = 0; // 音效撥放起始位置，強制跳至指定秒數(歸0)
  audioDom.play();
};

window.addEventListener("keydown", playAudio);
