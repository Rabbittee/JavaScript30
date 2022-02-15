const selector = (target) => document.querySelector(target);

function MediaPlayer(node, options) {
  const video = selector(node);
  if (!video) throw new Error();
  const playBtn = selector('.player__button.toggle');
  const volume = selector('input[name="volume"]');
  const progressBar = selector('input[name="progress"]');
  const speedBtn = selector('button[name="speed__toggle"]');
  const fullscreenBtn = selector('button[name="screen__toggle"]');
  const speedRate = [
    { label: 'x1', value: 1 },
    { label: 'x2', value: 2 },
    { label: 'x5', value: 5 },
  ];

  let defautPlayRate = 0;

  function toggleFullscreen() {
    if (!video.requestFullscreen) return;

    if (document.fullscreenElement) document.exitFullscreen();
    else video.requestFullscreen();
  }

  function toggleSpeed({ target }) {
    defautPlayRate++;
    const rate = speedRate[defautPlayRate % 3];
    video.playbackRate = rate.value;
    target.innerHTML = rate.label;
  }

  function togglePlay() {
    video.paused ? video.play() : video.pause();
  }

  function updatePlayState() {
    playBtn.innerHTML = video.paused ? '►' : '❚ ❚';
  }

  function setProgress({ target }) {
    video.currentTime = (video.duration * target.value) / 100;
    progressBar.value = target.value;
  }

  function updateProgress() {
    const { currentTime, duration } = video;
    const programming = (currentTime / duration) * 100;
    progressBar.value = programming;
  }

  function setVolume(value) {
    video.volume = value;
  }

  if (options?.immediate) video.play();

  video.addEventListener('click', togglePlay);
  video.addEventListener('play', updatePlayState);
  video.addEventListener('pause', updatePlayState);
  video.addEventListener('timeupdate', updateProgress);

  progressBar.addEventListener('change', setProgress);
  progressBar.addEventListener('click', setProgress);

  playBtn.addEventListener('click', togglePlay);

  volume.addEventListener('change', ({ target }) => setVolume(target.value));
  volume.addEventListener('click', ({ target }) => setVolume(target.value));

  speedBtn.addEventListener('click', toggleSpeed);
  fullscreenBtn.addEventListener('click', toggleFullscreen);
}

MediaPlayer('.player__video');
