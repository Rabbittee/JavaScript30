import './style.css';

const select = <T extends HTMLElement>(query: string) => document.querySelector<T>(query);
const canvas = select('#myCanvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
const color = select('#brush') as HTMLElement;
const clear = select('#clear') as HTMLElement;

const canvasOffsetTop = canvas.offsetTop;
const canvasOffestLeft = canvas.offsetLeft;

canvas.width = window.innerWidth - canvasOffestLeft;
canvas.height = window.innerHeight - canvasOffsetTop;

let isDrawing: Boolean = false;
let lineWidth: number = 50;
let direction: Boolean = true;

const changeColor = (e: Event) => {
  const target = e.target as HTMLInputElement;
  ctx.strokeStyle = target.value;
};

const onClear = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

const draw = (e: MouseEvent) => {
  if (!isDrawing) return;
  console.log('draw');
  ctx.lineWidth = lineWidth;
  ctx.lineCap = 'round';

  ctx.lineTo(e.clientX, e.clientY - canvasOffsetTop);
  ctx.stroke();
  if (ctx.lineWidth >= 50 || ctx.lineWidth <= 1) {
    direction = !direction;
  }

  if (direction) {
    lineWidth++;
  } else {
    lineWidth--;
  }
};

const mouseDown = (e: MouseEvent) => {
  console.log(e);
  isDrawing = true;
};

const stopDraw = () => {
  isDrawing = false;
  ctx.stroke();
  ctx.beginPath();
};

color.addEventListener('change', changeColor);
clear.addEventListener('click', onClear);

canvas.addEventListener('mousedown', mouseDown);
canvas.addEventListener('mouseup', stopDraw);
canvas.addEventListener('mouseout', stopDraw);

canvas.addEventListener('mousemove', draw);
