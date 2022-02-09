class Canvas {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  colorPicker: HTMLInputElement;
  penSize: HTMLInputElement;
  inputStyle: Element;
  point: { x: number; y: number };
  drawFlag: boolean;

  constructor() {
    const canvas = <HTMLCanvasElement>document.getElementById('draw');
    const ctx = canvas.getContext('2d');
    const colorPicker = <HTMLInputElement>document.getElementById('colorPicker');
    const penSize = <HTMLInputElement>document.getElementById('size');
    const inputStyle = document.querySelector('[data="range-input"]');

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    this.canvas = canvas;
    this.ctx = ctx;
    this.colorPicker = colorPicker;
    this.penSize = penSize;
    this.inputStyle = inputStyle;

    this.point = {
      x: 0,
      y: 0,
    };
    this.drawFlag = false;

    ctx.lineWidth = 10;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';

    this.updateColor(colorPicker);
    this.updateSize(penSize);
    this.initEvent();
  }

  private initEvent() {
    this.colorPicker.addEventListener('change', (e) =>
      this.updateColor(<HTMLInputElement>e.target)
    );
    this.penSize.addEventListener('change', (e) => this.updateSize(<HTMLInputElement>e.target));

    document.body.addEventListener('contextmenu', (e: MouseEvent) => {
      e.preventDefault();
      const colorPickerButton = this.colorPicker.closest('button');
      colorPickerButton.style.top = `${e.offsetY}px`;
      colorPickerButton.style.left = `${e.offsetX}px`;
      window.requestAnimationFrame(() => {
        this.colorPicker.click();
      });
    });

    window.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.code === 'ArrowRight') {
        this.penSize.value = `${Number(this.penSize.value) + 1}`;
      } else if (e.code === 'ArrowLeft') {
        this.penSize.value = `${Number(this.penSize.value) - 1}`;
      }
      this.updateSize(this.penSize);
    });
    window.addEventListener('keyup', (e: KeyboardEvent) => {});

    this.canvas.addEventListener('pointerdown', (e: MouseEvent) => {
      this.updatePoint(e);
      this.drawFlag = true;
    });
    this.canvas.addEventListener('pointermove', (e) => this.draw(e));
    this.canvas.addEventListener('pointerup', () => (this.drawFlag = false));
    this.canvas.addEventListener('pointerout', () => (this.drawFlag = false));

    document.getElementById('reset').addEventListener('click', () => canvas.reset());
  }

  public updateColor(target: HTMLInputElement) {
    this.ctx.strokeStyle = target.value;
    this.updateSize(this.penSize);
  }

  public updateSize(target: HTMLInputElement) {
    this.ctx.lineWidth = Number(target.value);
    this.inputStyle.innerHTML = `
      input[type='range']::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: ${Number(target.value)}px;
        width: ${Number(target.value)}px;
        border-radius: 50%;
        background: ${this.colorPicker.value};
        cursor: ew-resize;
      }
    `;
  }

  public updatePoint(e: MouseEvent) {
    this.point.x = e.offsetX;
    this.point.y = e.offsetY;
  }

  public reset() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
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
