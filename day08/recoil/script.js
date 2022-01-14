const select = (target) => document.querySelector(target);

function canvasEffect(node) {
  if (!node) return;
  const container = node.closest(".canvas-container");
  const fixHeight = window.innerHeight - container.offsetHeight;

  const brush = {
    state: {
      isRandom: false,
      isDrawing: false,
      lastPoint: {
        x: 0,
        y: 0,
      },
      width: 20,
      strokeFill: "#000000",
      alpha: 1,
    },
    setDrawing: (state) => (brush.state.isDrawing = state),
    setStrokeColor: (color) => (brush.state.strokeFill = color),
    setBrushWidth: (val) => (brush.state.width = val),
    updatePoint: (x, y) => (brush.state.lastPoint = { x, y }),
    setRandom: (bool) => (brush.state.isRandom = bool),
  };

  const mousePoint = {
    x: 0,
    y: 0,
  };

  let randomHue = 0;
  let direction = false;

  node.width = container.offsetWidth;
  node.height = container.offsetHeight;

  function randomWidth() {
    if (brush.state.width >= 100 || brush.state.width <= 5)
      direction = !direction;
    if (direction) brush.state.width++;
    else brush.state.width--;
    return brush.state.width;
  }

  function randomColor() {
    randomHue++;
    const h = randomHue % 360;
    return `hsl(${h},100%,50%)`;
  }

  function draw(event) {
    const ctx = node.getContext("2d");
    ctx.lineWidth = brush.state.isRandom ? randomWidth() : brush.state.width;
    ctx.strokeStyle = brush.state.isRandom
      ? randomColor()
      : brush.state.strokeFill;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(brush.state.lastPoint.x, brush.state.lastPoint.y);
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.closePath();
    ctx.stroke();

    brush.updatePoint(mousePoint.x, mousePoint.y - fixHeight);
  }

  node.addEventListener("mousedown", function (e) {
    brush.setDrawing(true);
  });

  node.addEventListener("mouseup", function (e) {
    brush.setDrawing(false);
  });

  node.addEventListener("mousemove", function (e) {
    if (!brush.state.isDrawing) return;
    brush.updatePoint(e.clientX, e.clientY - fixHeight);
    draw(e);
  });

  return {
    strokeFill: brush.setStrokeColor,
    width: brush.setBrushWidth,
    random: brush.setRandom,
  };
}

const toolbar = select("#tools");

const container = select("#draw");

const brush = canvasEffect(container);

toolbar.addEventListener(
  "input",
  function ({ target: { name, value, checked } }) {
    switch (name) {
      case "width":
        brush.width(value);
        break;
      case "color":
        brush.strokeFill(value);
        break;
      case "random":
        brush.random(checked);
    }
  }
);
