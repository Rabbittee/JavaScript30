var Canvas = /** @class */ (function () {
    function Canvas() {
        var canvas = document.getElementById('draw');
        var ctx = canvas.getContext('2d');
        var colorPicker = document.getElementById('colorPicker');
        var penSize = document.getElementById('size');
        var inputStyle = document.querySelector('[data="range-input"]');
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        this.canvas = canvas;
        this.ctx = ctx;
        this.colorPicker = colorPicker;
        this.penSize = penSize;
        this.inputStyle = inputStyle;
        this.point = {
            x: 0,
            y: 0
        };
        this.drawFlag = false;
        ctx.lineWidth = 10;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        this.updateColor(colorPicker);
        this.updateSize(penSize);
        this.initEvent();
    }
    Canvas.prototype.initEvent = function () {
        var _this = this;
        this.colorPicker.addEventListener('change', function (e) {
            return _this.updateColor(e.target);
        });
        this.penSize.addEventListener('change', function (e) { return _this.updateSize(e.target); });
        document.body.addEventListener('contextmenu', function (e) {
            e.preventDefault();
            var colorPickerButton = _this.colorPicker.closest('button');
            colorPickerButton.style.top = "".concat(e.offsetY, "px");
            colorPickerButton.style.left = "".concat(e.offsetX, "px");
            window.requestAnimationFrame(function () {
                _this.colorPicker.click();
            });
        });
        window.addEventListener('keydown', function (e) {
            if (e.code === 'ArrowRight') {
                _this.penSize.value = "".concat(Number(_this.penSize.value) + 1);
            }
            else if (e.code === 'ArrowLeft') {
                _this.penSize.value = "".concat(Number(_this.penSize.value) - 1);
            }
            _this.updateSize(_this.penSize);
        });
        window.addEventListener('keyup', function (e) { });
        this.canvas.addEventListener('pointerdown', function (e) {
            _this.updatePoint(e);
            _this.drawFlag = true;
        });
        this.canvas.addEventListener('pointermove', function (e) { return _this.draw(e); });
        this.canvas.addEventListener('pointerup', function () { return (_this.drawFlag = false); });
        this.canvas.addEventListener('pointerout', function () { return (_this.drawFlag = false); });
        document.getElementById('reset').addEventListener('click', function () { return canvas.reset(); });
    };
    Canvas.prototype.updateColor = function (target) {
        this.ctx.strokeStyle = target.value;
        this.updateSize(this.penSize);
    };
    Canvas.prototype.updateSize = function (target) {
        this.ctx.lineWidth = Number(target.value);
        this.inputStyle.innerHTML = "\n      input[type='range']::-webkit-slider-thumb {\n        -webkit-appearance: none;\n        height: ".concat(Number(target.value), "px;\n        width: ").concat(Number(target.value), "px;\n        border-radius: 50%;\n        background: ").concat(this.colorPicker.value, ";\n        cursor: ew-resize;\n      }\n    ");
    };
    Canvas.prototype.updatePoint = function (e) {
        this.point.x = e.offsetX;
        this.point.y = e.offsetY;
    };
    Canvas.prototype.reset = function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };
    Canvas.prototype.draw = function (e) {
        if (!this.drawFlag)
            return;
        this.ctx.beginPath();
        this.ctx.moveTo(this.point.x, this.point.y);
        this.ctx.lineTo(e.offsetX, e.offsetY);
        this.ctx.closePath();
        this.ctx.stroke();
        this.updatePoint(e);
    };
    return Canvas;
}());
var canvas = new Canvas();
