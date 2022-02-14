const select = (selector) => document.querySelector(selector);
const selectAll = (selector) => document.querySelectorAll(selector);

const selectors = {
  video: '#video',
  controls: {
    panel: '#player__controls',
    progress: '#player__progress',
    progressFill: '#player__progress__filled',
    playToggle: '#player__playOrPause',
    volume: '#player__volume',
    playbackRate: '#player__playbackRate',
    skip: '.player__skip',
  },
};

const icons = {
  play: '►',
  pause: '❚ ❚',
};

function videoSetup() {
  const video = select(selectors.video);
  const controls = select(selectors.controls.panel);
  const progress = select(selectors.controls.progress);

  const getCurrentTime = () => video.currentTime;
  const getPaused = () => video.paused;
  const getCurrentTimePercent = () => Math.floor((getCurrentTime() / video.duration) * 1000) / 1000;

  function checkPlayIcon() {
    const toggleButton = select(selectors.controls.playToggle);
    toggleButton.innerHTML = getPaused() ? icons.play : icons.pause;
  }

  function togglePlay(forceState) {
    forceState ?? getPaused() ? video.play() : video.pause();
  }

  function setCurrentTime(time) {
    video.currentTime = time;
  }

  function setCurrentTimeByPercentage(percentage) {
    setCurrentTime(video.duration * percentage);
  }

  function setVolume(targetVolume) {
    video.volume = targetVolume;
  }

  function setPlaybackRate(targetPlayback) {
    video.playbackRate = targetPlayback;
  }

  // 根據傳入的 event 來確認是否與 targetSelector 有互動
  function isTargetElement(e, targetSelector = '') {
    return !!(e.target.closest(targetSelector) ?? false);
  }

  function setCurrentProgress(progressPercent) {
    const currentPercent = getCurrentTimePercent();
    const result = progressPercent ?? currentPercent * 100;
    select(selectors.controls.progressFill).style.flexBasis = `${result}%`;
  }

  function onClickPlayToggle(e) {
    if (isTargetElement(e, selectors.controls.playToggle) === false) return;
    togglePlay();
    checkPlayIcon();
  }

  function onClickSkipButton(e) {
    if (isTargetElement(e, selectors.controls.skip) === false) return;
    const skip = Number(e.target.dataset.skip);
    setCurrentTime(getCurrentTime() + skip);
  }

  function onSlideProgress() {
    // reference: https://developer.mozilla.org/en-US/docs/Web/API/Element/setPointerCapture
    function beginSliding(e) {
      progress.setPointerCapture(e.pointerId);
      progress.addEventListener('pointermove', onSliding);
    }

    function stopSliding({ pointerId, ...rest }) {
      progress.releasePointerCapture(pointerId);
      // 再次觸發，讓 pointerdown 也可以控制時間點
      onSliding(arguments[0]);
      progress.removeEventListener('pointermove', onSliding);
    }

    function onSliding({ layerX = 0, target: { clientWidth } }) {
      const userXPosition = Math.min(clientWidth, Math.max(0, layerX));
      const currentPercentage = Math.floor((userXPosition / clientWidth) * 10000) / 10000;
      // 根據百分比設定當前時間
      setCurrentTimeByPercentage(currentPercentage);
      // 根據百分比設定當前時間條長度
      setCurrentProgress(currentPercentage * 100);
    }

    progress.addEventListener('pointerdown', beginSliding);
    progress.addEventListener('pointerup', stopSliding);
  }

  controls.addEventListener('click', (e) => {
    e.preventDefault();
    // 按下播放鈕
    onClickPlayToggle(e);
    // 按下跳過時間鈕
    onClickSkipButton(e);
  });

  controls.addEventListener('change', (e) => {
    e.preventDefault();
    const form = new FormData(e.target.form);
    // 取得表單
    const { playbackRate, volume } = Object.fromEntries(form.entries());
    // 設定播放速度
    setPlaybackRate(playbackRate);
    // 設定音量
    setVolume(volume);
  });

  video.addEventListener('timeupdate', () => {
    // 設定時間條長度
    setCurrentProgress();
    // 檢查播放鈕圖像
    checkPlayIcon();
  });

  // 檢查播放鈕圖像
  checkPlayIcon();
  // 監聽時間條
  onSlideProgress();
}

videoSetup();
