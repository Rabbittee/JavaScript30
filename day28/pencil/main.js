console.log('here is day 28 main.js');

const select = (DOM) => document.querySelector(DOM);

const speedBar = select('.speed-bar');
const speedHeight = select('.speed').getBoundingClientRect().height;
const video = select('.flex');
console.log(video);

const handleAdjustSpeed = (e) => {
  const y = e.pageY - e.target.offsetTop;
  const percent = y / speedHeight;
  const min = 0.4;
  const max = 4;
  const height = Math.round(percent * 100) + '%';
  const playRate = percent * (max - min) + min;
  speedBar.style.height = height;
  speedBar.textContent = playRate.toFixed(2) + 'x';
  video.playbackRate = playRate;
};

select('.speed').addEventListener('mousemove', handleAdjustSpeed);
