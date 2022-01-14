window.addEventListener('keydown', (e) => {
  // 取得按下的鍵值 keycode已棄用 使用charCodeAt()替代
  // 音檔編號是大寫的ascii碼 字元轉大寫避免使用者輸入小寫失效
  const target = e.key.toUpperCase().charCodeAt();

  // 依按下的鍵值播放音檔
  playAudio(target);

  // 按鈕套用動畫CSS
  buttonEffect(target);
});

function playAudio(t) {
  const audio = document.querySelector(`audio[data-key='${t}']`);
  // 每次播放都從音檔開頭0開始 避免連擊失效
  audio.currentTime = 0;
  audio.play();
}

function buttonEffect(t) {
  const btn = document.querySelector(`div[data-key='${t}']`);
  btn.classList.add('playing');
  // 延遲40ms再移除按鈕效果
  setTimeout(() => {
    btn.classList.remove('playing');
  }, 40);
}
