// 視窗監聽，鍵盤點下事件
window.addEventListener("keydown", function (event) {
  // 鍵盤點到哪一顆按鍵？ 按鍵號碼？
  const keyCurrent = event.keyCode;

  // 何時播放音樂
  function playAudio() {
    // 按鍵號碼
    const audioClass = document.querySelector(`audio[data-key='${keyCurrent}']`);
    if (!audioClass) return;

    // 按鍵號碼 = 音樂號碼，就播音樂
    // 每次點擊之間，要取消上一次
    audioClass.currentTime = 0;
    audioClass.play();
  }

  // 何時換樣式
  function transitionStyle() {
    // 樣式的 DOM
    const audioDivClass = document.querySelector(`div[data-key='${keyCurrent}']`);

    // 增加樣式
    audioDivClass.classList.add("playing");
    // 動畫的最後，移除樣式
    audioDivClass.addEventListener("transitionend", function () {
      audioDivClass.classList.remove("playing");
    });
  }
  playAudio();
  transitionStyle();
});
