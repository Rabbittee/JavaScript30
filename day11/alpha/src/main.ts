import './style.css';

const select = <T extends HTMLElement>(query: string) => document.querySelector<T>(query);

const icon = {
  play: '►',
  paused: '❚ ❚',
};

const player = select('.player') as HTMLElement;
const viewer = select('.viewer') as HTMLMediaElement | any;
const progressBar = player.querySelector('.progress__filled') as HTMLElement;
const progress = player.querySelector('.progress') as HTMLElement;
const toggleButton = player.querySelector('.toggle') as HTMLElement;
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.play__slider');

function togglePlay() {
  const methods = viewer.paused ? 'play' : 'pause';
  viewer[methods]();
}

function handleProgress() {
  const percent = (viewer.currentTime / viewer.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function updateButton() {
  toggleButton.textContent = viewer.paused ? icon.play : icon.paused;
}

function skip(e: Event) {
  const target = e.target as any;
  viewer.currentTime += parseFloat(target.dataset.skip);
}

function handleRangeUpdate(this: any) {
  viewer[this.name] = this.value;
}

function scrub(e: any) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * viewer.duration;
  viewer.currentTime = scrubTime;
}

viewer.addEventListener('click', togglePlay);
viewer.addEventListener('timeupdate', handleProgress);
viewer.addEventListener('play', updateButton);
viewer.addEventListener('pause', updateButton);

toggleButton.addEventListener('click', togglePlay);
skipButtons.forEach((button) => button.addEventListener('click', skip));
ranges.forEach((range) => range.addEventListener('change', handleRangeUpdate));
ranges.forEach((range) => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => (mousedown = true));
progress.addEventListener('mouseup', () => (mousedown = false));
