// Get One elements
const player = document.querySelector('.player');
const progress = document.querySelector('.progress');

// Build out functions
const video = document.querySelector('.viewer');
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

const toggle = document.querySelector('.toggle');
function updateButton(e) {
  const icon = e.target.paused ? '►' : '▍▍';
  toggle.textContent = icon;
}

const skipButtons = document.querySelectorAll('[data-skip]');
function skip(e) {
  video.currentTime += parseFloat(e.target.dataset.skip);
}

const ranges = document.querySelectorAll('.player__slider');
function handleRangeUpdate(e) {
  const name = e.target.name;
  const value = e.target.value;
  video[name] = value;

  const paramater = document.getElementById(`${name}-El`);
  paramater.textContent = value;
}

const progressBar = document.querySelector('.progress__filled');
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// Hook up the event listnens
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach((button) => button.addEventListener('click', skip));
ranges.forEach((range) => range.addEventListener('change', handleRangeUpdate));
ranges.forEach((range) => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => (mousedown = true));
progress.addEventListener('mouseup', () => (mousedown = false));
