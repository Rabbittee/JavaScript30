/*
 * @Author:Claire Li
 * @Date:2022-02-14 12:01:56
 * @LastEditors:Claire Li
 * @LastEditTime:2022-02-15 12:31:47
 * @Description:
 */
/* Get Our Elements */
const player = document.querySelector('.player');
let video;
// const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const header = document.querySelector('.header');
const information = document.querySelector('.information');
const playBtn = document.querySelector('#play-btn');

/* Build out functions */
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  console.log(video[method]);
  // take the property as function name and invoke it
  video[method]();
}

function updateButton() {
  const icon = this.paused
    ? `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
  </svg>`
    : `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
</svg>`;
  toggle.innerHTML = icon;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  // see which input tag is going to change value
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function changeToVideo() {
  header.classList.add('showoff');
  information.classList.add('showoff');
  header.remove();
  information.remove();

  player.insertAdjacentHTML(
    'afterbegin',
    '<video class="player__video viewer" src="./652333414.mp4"></video>'
  );
  player.insertAdjacentHTML(
    'beforebegin',
    '<img src="https://c4.wallpaperflare.com/wallpaper/38/398/574/anime-attack-on-titan-attack-on-titan-levi-ackerman-hd-wallpaper-preview.jpg" alt="" class="wallpaper absolute -z-10 w-screen h-screen blur-sm">'
  );

  video = player.querySelector('.viewer');

  video.addEventListener('click', togglePlay);
  video.addEventListener('play', updateButton);
  video.addEventListener('pause', updateButton);
  video.addEventListener('timeupdate', handleProgress);
}

/* Hook up the event listeners */
toggle.addEventListener('click', togglePlay);
skipButtons.forEach((button) => button.addEventListener('click', skip));
ranges.forEach((range) => range.addEventListener('input', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));

// to prevent when a 'mouseup' event cause scrub function running
progress.addEventListener('mousedown', () => (mousedown = true));
progress.addEventListener('mouseup', () => (mousedown = false));

playBtn.addEventListener('click', changeToVideo);
