const drawArea = document.getElementById('draw');
// console.log('drawArea: ', drawArea);

// check for support
if (drawArea.getContext === false) {
  const ERROR_MSG = `This browser isn't support canvas.`;
  alert(ERROR_MSG);
}

const ctx = drawArea.getContext('2d');
// console.log('ctx: ', ctx);

/**
 * set canvas area
 */
drawArea.width = window.innerWidth;
drawArea.height = window.innerHeight;

/**
 * set canvas drawing style
 */
ctx.strokeStyle = '#BAD555';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;

/**
 * parameters initialValue
 */
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

/**
 * what happen when mousedown & move
 * use direction control lineWidth increase or decrease
 * combine lineWidth and hue value
 * @param {event} e
 * @returns
 */
function draw(e) {
  if (isDrawing === false) return;
  // console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  // start canvas line
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  // change color
  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    // control width increase or decrease
    direction = !direction;
  }
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}
// event listener
drawArea.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
drawArea.addEventListener('mousemove', draw);
drawArea.addEventListener('mouseup', () => (isDrawing = false));
drawArea.addEventListener('mouseout', () => (isDrawing = false));
