var lerp = function (x1, x2, t) { return x1 * (1 - t) + x2 * t; };
var select = function (query) { return document.querySelector(query); };
var setRotate = function (element, value) {
    return element.style.setProperty("--rotate", "".concat(90 + value, "deg"));
};
function every(ms, update) {
    var current = new Date();
    update.hour(current);
    update.min(current);
    update.second(current);
    setTimeout(function () { return every(ms, update); }, ms);
}
every(1000, {
    hour: function (time) {
        return setRotate(select(".hour-hand"), lerp(0, 360, time.getHours() / 24));
    },
    min: function (time) {
        return setRotate(select(".min-hand"), lerp(0, 360, time.getMinutes() / 60));
    },
    second: function (time) {
        return setRotate(select(".second-hand"), lerp(0, 360, time.getSeconds() / 60));
    }
});
