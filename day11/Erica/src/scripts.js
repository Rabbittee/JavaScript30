const $ = (e) => document.querySelector(e);

const player = $('.player');
const playBtn = $('.player__button');
const video = $('.player__video');
const progress = $('.player__progress');
const progressBar = $('.progress__filled');
const controllers = player.querySelectorAll('.player__btn button');
const skipBtns = player.querySelectorAll('[data-skip]');
const setting = {
  status: false,
  volume: 0.5,
  playbackRate: 1,
};

function handleBtns(e, btn, name, max) {
  const parent = btn.parentNode;
  const dataName = parent.getAttribute('name');
  const value = parent.querySelector('span');
  const type = e.target.dataset.type;

  if (dataName !== name) return;
  if (type === 'incs' && setting[name] < max) setting[name] += 0.1;
  if (type === 'decs' && setting[name] > 0) setting[name] -= 0.1;
  if (setting[name] > max) setting[name] = max;
  if (setting[name] < 0) setting[name] = 0;

  value.textContent = Number(setting[name]).toFixed(1) * 10;
  video[name] = Number(setting[name]).toFixed(1);
}

function handleSkip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.width = `${percent}%`;
}

function handleProgressBar(e) {
  const time = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = time;
}

function togglePlay() {
  player.classList.remove('cover');
  setting.status = !setting.status;
  if (setting.status) {
    video.play();
    playBtn.textContent = '❚ ❚';
  } else {
    video.pause();
    playBtn.textContent = '►';
  }
}

controllers.forEach((btn) => {
  btn.addEventListener('click', (e) => handleBtns(e, btn, 'volume', 1));
  btn.addEventListener('click', (e) => handleBtns(e, btn, 'playbackRate', 2));
});

playBtn.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', handleProgress);
skipBtns.forEach((btn) => btn.addEventListener('click', handleSkip));
progress.addEventListener('click', handleProgressBar);
