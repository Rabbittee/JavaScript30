// Utilities
const select = (selector) => document.querySelector(selector);

const debounce = (func) => {
  let timer;
  return function (event) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(func, 100, event);
  };
};

// Canvas setup
const canvasSetup = {
  canvas: select('#draw'),
  lineWidth: 10,
  strokeStyle: '#111',
  frontImage: './images/metal-texture.jpeg',
  globalCompositeOperation: 'source-over', // destination-out
  controlFormPanel: select('form#control-panel'),
};

// invoke while dragging on canvas
function onDraggingCanvas() {
  const canvas = canvasSetup.canvas;
  const hook = canvas.addEventListener.bind();
  // 判斷是否正在畫
  let isDrawing = false;
  let lineWidth = canvasSetup.lineWidth;
  let [prevX, prevY] = [null, null];

  function onMousedown(e) {
    if (e.target === canvas) {
      canvas.addEventListener('mousemove', onMousemove);
    }
  }

  function onMouseupOrLeave() {
    canvas.removeEventListener('mousemove', onMousemove);
    isDrawing = false;
  }

  function duringDrawing() {
    if (lineWidth < 100) lineWidth += 1;
  }

  function stopDrawing({ offsetX, offsetY }) {
    [prevX, prevY] = [offsetX, offsetY];
    lineWidth = canvasSetup.lineWidth;
    isDrawing = true;
  }

  function onMousemove({ target, offsetX, offsetY }) {
    if (target === canvas) {
      const ctx = canvas.getContext('2d');
      // update values
      isDrawing ? duringDrawing() : stopDrawing({ offsetX, offsetY });
      // 綁定畫筆模式
      ctx.globalCompositeOperation = canvasSetup.globalCompositeOperation;

      const { x, y } = draw({
        canvas,
        x: offsetX,
        y: offsetY,
        prevX,
        prevY,
        lineWidth,
        strokeStyle: canvasSetup.strokeStyle,
      });
      prevX = x;
      prevY = y;
    }
  }

  hook('mousedown', onMousedown);
  hook('mouseup', onMouseupOrLeave);
  hook('mouseleave', onMouseupOrLeave);
}

// draw on canvas according to x & y position
function draw({
  canvas,
  x,
  y,
  prevX = null,
  prevY = null,
  lineWidth = 10,
  lineCap = 'round',
  strokeStyle = '#fff',
  lineJoin = 'round',
}) {
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');
    // style setup
    ctx.strokeStyle = strokeStyle;
    ctx.lineCap = lineCap;
    ctx.lineWidth = lineWidth;
    ctx.lineJoin = lineJoin;

    // draw line
    ctx.beginPath();
    ctx.moveTo(prevX ?? x, prevY ?? y);
    ctx.lineTo(x, y);
    ctx.stroke();
  }
  return { x, y };
}

// set the silver image on canvas
function setCanvasImage(canvas, callback) {
  const ctx = canvas.getContext('2d');
  const img = new Image();
  img.onload = () => {
    ctx.drawImage(img, 0, 0);
    callback();
  };
  img.src = canvasSetup.frontImage;
}

// invoke while canvas is resized
function onCanvasResize() {
  const canvas = canvasSetup.canvas;
  const bodyClassList = select('body').classList;
  bodyClassList.toggle('body-bg', false);
  resizeCanvasToDisplaySize(canvas);
  setCanvasImage(canvas, () => {
    // bind class while image on canvas has loaded
    bodyClassList.toggle('body-bg', true);
  });
}

// canvas resolution
function resizeCanvasToDisplaySize(canvas) {
  // look up the size the canvas is being displayed
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  // If it's resolution does not match change it
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }
}

function setCanvasConfig(event) {
  const formData = new FormData(event.target.form);
  for (const [key, value] of formData.entries()) {
    canvasSetup[key] = value;
  }
  event.stopPropagation();
}

function initialize() {
  // remain canvas resolution
  onCanvasResize();
  window.addEventListener('resize', debounce(onCanvasResize));

  onDraggingCanvas();

  canvasSetup.controlFormPanel.addEventListener('change', setCanvasConfig);
}

initialize();
