var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var select = function (query) {
    return document.querySelector(query);
};
var monad = function (value) { return ({
    map: function (fn) { return monad(fn(value)); },
    unwrap: function () { return value; }
}); };
var getCenter = function (_a) {
    var x = _a[0], y = _a[1], w = _a[2], h = _a[3];
    return [w / 2 + x, h / 2 + y];
};
var sub = function (v1, v2) { return [v1[0] - v2[0], v1[1] - v2[1]]; };
var scale = function (_a, f) {
    var x = _a[0], y = _a[1];
    return [x * f, y * f];
};
var rgba = function (vec) { return "rgba(".concat(vec.join(), ")"); };
var textShadow = function (_a) {
    var offsetX = _a.offsetX, offsetY = _a.offsetY, radius = _a.radius, color = _a.color;
    return "".concat(offsetX, "px ").concat(offsetY, "px ").concat(radius, "px ").concat(color);
};
var center = monad(select(".hero"))
    .map(function (el) {
    return getCenter([el.offsetLeft, el.offsetTop, el.offsetWidth, el.offsetHeight]);
})
    .unwrap();
var h1 = select(".hero h1");
var Color = {
    Red: [256, 0, 256, 0.7],
    LightBlue: [0, 256, 256, 0.7],
    Green: [0, 256, 0, 0.7],
    DarkBlue: [0, 0, 256, 0.7]
};
window.addEventListener("mousemove", function (event) {
    if (!(event instanceof MouseEvent))
        return;
    var _a = monad(event)
        .map(function (_a) {
        var x = _a.x, y = _a.y;
        return sub([x, y], center);
    })
        .map(function (vec) { return scale(vec, 0.5); })
        .unwrap(), x = _a[0], y = _a[1];
    h1.style.setProperty("--shadow", [
        { offsetX: x, offsetY: y, color: Color.Red },
        { offsetX: -x, offsetY: y, color: Color.LightBlue },
        { offsetX: y, offsetY: -x, color: Color.Green },
        { offsetX: -y, offsetY: x, color: Color.DarkBlue },
    ]
        .map(function (props) {
        return textShadow(__assign(__assign({}, props), { radius: 0, color: rgba(props.color) }));
    })
        .join());
});
