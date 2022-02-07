class Canvas {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  point: { x: number; y: number };
  drawFlag: boolean;

  constructor() {
    const canvas = <HTMLCanvasElement>document.getElementById('draw');
    const ctx = canvas.getContext('2d');

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

  public updatePoint(e: MouseEvent) {
    this.point.x = e.offsetX;
    this.point.y = e.offsetY;
  }

  public draw(e: MouseEvent) {
    if (!this.drawFlag) return;

    this.ctx.beginPath();
    this.ctx.moveTo(this.point.x, this.point.y);
    this.ctx.lineTo(e.offsetX, e.offsetY);
    this.ctx.closePath();
    this.ctx.stroke();
    this.updatePoint(e);
  }
}

const canvas = new Canvas();

canvas.canvas.addEventListener('mousedown', (e: MouseEvent) => {
  canvas.updatePoint(e);
  canvas.drawFlag = true;
});
canvas.canvas.addEventListener('mousemove', (e) => canvas.draw(e));
canvas.canvas.addEventListener('mouseup', () => (canvas.drawFlag = false));
