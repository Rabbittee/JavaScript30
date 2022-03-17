console.log('day27 is here');
const select = (DOM) => document.querySelector(DOM);
const selectAll = (DOM) => document.querySelectorAll(DOM);

const slider = select('.items');

// 是否按下滑鼠
let isDown = false;

// 起始點
let startX;

// 往左滑動的距離
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  // 取得當下的 x 軸位置
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;

  // 滑動速率
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
});
