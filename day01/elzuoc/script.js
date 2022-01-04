const audioPath = {
  65: "../sample/sounds/clap.wav",
  83: "../sample/sounds/hihat.wav",
  68: "../sample/sounds/kick.wav",
  70: "../sample/sounds/openhat.wav",
  71: "../sample/sounds/boom.wav",
  72: "../sample/sounds/ride.wav",
  74: "../sample/sounds/snare.wav",
  75: "../sample/sounds/tom.wav",
  76: "../sample/sounds/tink.wav",
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
const setDivStyle = (e, getDom) => {
  getDom.classList.add("playing");
};

// 撥放音效 & 效果
const playAudio = (e) => {
  // 取得對應鍵盤輸入的audio與div
  let getAudio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  let getKeyDiv = document.querySelector(`div[data-key='${e.keyCode}']`);

  if (!getAudio || !getKeyDiv) return;

  // 設定音效路徑到兔兔教
  getAudio.src = audioPath[e.keyCode];

  setDivStyle(e, getKeyDiv);
  removeTransition(getKeyDiv);
  getAudio.currentTime = 0; // 音效撥放起始位置，強制跳至指定秒數(歸0)
  getAudio.play();
};

window.addEventListener("keydown", playAudio);
