var Canvas = /** @class */ (function () {
  function Canvas() {
    var canvas = document.getElementById('draw');
    var ctx = canvas.getContext('2d');
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    this.canvas = canvas;
    this.ctx = ctx;
    this.point = {
      x: 0,
      y: 0,
    };
    this.drawFlag = false;
  }
  Canvas.prototype.updatePoint = function (e) {
    this.point.x = e.offsetX;
    this.point.y = e.offsetY;
  };
  Canvas.prototype.draw = function (e) {
    if (!this.drawFlag) return;
    this.ctx.beginPath();
    this.ctx.moveTo(this.point.x, this.point.y);
    this.ctx.lineTo(e.offsetX, e.offsetY);
    this.ctx.closePath();
    this.ctx.stroke();
    this.updatePoint(e);
  };
  return Canvas;
})();
var canvas = new Canvas();
canvas.canvas.addEventListener('mousedown', function (e) {
  canvas.updatePoint(e);
  canvas.drawFlag = true;
});
canvas.canvas.addEventListener('mousemove', function (e) {
  return canvas.draw(e);
});
canvas.canvas.addEventListener('mouseup', function () {
  return (canvas.drawFlag = false);
});
