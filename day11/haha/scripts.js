// select dom
const selectDom = (target) => document.querySelector(target);
// set dom's attribute
const setAttribute = (dom, attribute, val) => dom.setAttribute(attribute, val);
// format time
const roundUpTime = (seconds) => formatTime(Math.round(seconds));
// format time
function formatTime(seconds) {
  const result = new Date(seconds * 1000).toISOString().slice(0, 19);
  return { min: result.substring(14, 16), sec: result.substring(17) };
}
let play = false;
let mute = false;

const video = selectDom('video');
const videoTimeElapsed = selectDom('.time-elapsed');
const videoDuration = selectDom('.duration');
const progress = selectDom('.inner');
const progressBar = selectDom('.bar');
const soundsBar = selectDom('.volume');
const seekToolTip = selectDom('.seek-tooltip');
const volumeBtn = selectDom('.muted i');
const rewindBtn = selectDom('.rewind');
const forwardBtn = selectDom('.forward');
const fullScreenBtn = selectDom('.full-screen i');
const togglePlayBtn = selectDom('.toggle-play i');

video.addEventListener('click', handlePlay);
video.addEventListener('timeupdate', handleVideoUpdate);
video.addEventListener('loadedmetadata', initializeVideo);
soundsBar.addEventListener('change', handleVolumes);
volumeBtn.addEventListener('click', handleMute);
rewindBtn.addEventListener('click', handleRewind);
forwardBtn.addEventListener('click', handleForward);
progressBar.addEventListener('click', handleCurrentTime);
fullScreenBtn.addEventListener('click', handleFullScreen);

// video play or pause
function handlePlay() {
  play = !play;
  if (play) {
    initializeVideo();
    video.play();
  } else {
    video.pause();
  }
  toggleIcon(togglePlayBtn, 'fa-play', 'fa-pause');
}

// handle video muted
function handleMute() {
  mute = !mute;
  video.muted = mute;
  if (mute) soundsBar.value = 0;
  else soundsBar.value = video.volume * 10;
  toggleIcon(volumeBtn, 'fa-volume-high', 'fa-volume-xmark');
}

// video volume
function handleVolumes() {
  const volume = soundsBar.value / 10;
  video.volume = volume;
  setAttribute(video, 'volume', volume);
}

// show play or pause icon
function toggleIcon(dom, icon1, icon2) {
  dom.classList.toggle(icon1);
  dom.classList.toggle(icon2);
}

// when video update time
function handleVideoUpdate() {
  updateProgress(); // update video progress bar
  updateTimeElapsed(); // update video time elapsed
}

// video progress bar
function updateProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progress.style.width = `${percent}%`;
}

// update video time elapsed
function updateTimeElapsed() {
  const time = roundUpTime(video.currentTime);
  videoTimeElapsed.innerText = `${time.min}:${time.sec}`;
  setAttribute(videoTimeElapsed, 'datetime', `${time.minutes}m ${time.seconds}s`);
}

// video full screen
function handleFullScreen(e) {
  e.preventDefault();
  video.requestFullscreen();
}

function handleCurrentTime(e) {
  const scrubTime = (e.offsetX / progressBar.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// video rewind
function handleRewind() {
  video.currentTime = video.currentTime - (video.duration / 100) * 5;
}

// video forward
function handleForward() {
  video.currentTime = video.currentTime + (video.duration / 100) * 5;
}

// set video duration
function initializeVideo() {
  const time = roundUpTime(video.duration);
  videoDuration.innerText = `${time.min}:${time.sec}`;
  setAttribute(videoDuration, 'datetime', `${time.minutes}m ${time.seconds}s`);
  setAttribute(progressBar, 'max', video.duration);
  setAttribute(video, 'volume', video.volume);
}
