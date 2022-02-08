// set brush color
const setBrushColor = (color) => (ctx.strokeStyle = color);
// set brush width
const setBrushWidth = (width) => (ctx.lineWidth = width);
// set mouse location
const setMouseXY = ({ offsetX, offsetY }) => ([lastX, lastY] = [offsetX, offsetY]);
// select dom
const selectDom = (target) => document.querySelector(target);

// canvas background setting
const canvas = selectDom('#draw');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
let isDrawing = false;
let lastX = 0;
let lastY = 0;

// canvas mouse event
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  setMouseXY(e);
});
canvas.addEventListener('mousemove', (e) => drawing(e));
canvas.addEventListener('mouseup', () => (isDrawing = false));

// drawing
function drawing(e) {
  if (!isDrawing) return;
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  setMouseXY(e);
}

// color picker
const picker = selectDom('input[type="color"]');
picker.addEventListener('input', () => setBrushColor(picker.value));

// eraser
const eraser = selectDom('.eraser');
eraser.addEventListener('click', () => setBrushColor('white'));

// slider
const slider = selectDom('input[type="range"]');
slider.addEventListener('input', () => setBrushWidth(slider.value));
