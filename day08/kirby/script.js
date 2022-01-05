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
function state(value) {
    var reducer = undefined;
    var effects = [];
    var subject = {
        then: function (effect) {
            effects.push(effect);
            return subject;
        }
    };
    var combiner = {
        reduce: function (_reducer) {
            reducer = _reducer;
            return subject;
        }
    };
    function observe(source) {
        source(function (action) {
            value = reducer === null || reducer === void 0 ? void 0 : reducer(value, action);
            effects.forEach(function (effect) { return effect(value, action); });
        });
        return combiner;
    }
    return { observe: observe };
}
var clamp = function (min, max) { return function (value) {
    return Math.min(max, Math.max(min, value));
}; };
var hsl = function (_a) {
    var h = _a[0], s = _a[1], l = _a[2];
    return "hsl(\n    ".concat(clamp(0, 360)(h), ", \n    ").concat(clamp(0, 100)(s), "%, \n    ").concat(clamp(0, 100)(l), "%\n)");
};
var select = function (query) {
    return document.querySelector(query);
};
var setSize = function (_a) {
    var width = _a[0], height = _a[1];
    return function (element) {
        return Object.assign(element, { width: width, height: height });
    };
};
function Drawer() {
    var canvas = select("#draw");
    setSize([window.innerWidth, window.innerHeight])(canvas);
    var context = canvas.getContext("2d");
    context.lineCap = "round";
    function changeColor(color) {
        context.strokeStyle = color;
    }
    function changeSize(size) {
        context.lineWidth = size;
    }
    function drawPath(_a) {
        var x = _a[0], y = _a[1];
        context.lineTo(x, y);
        context.stroke();
    }
    function move(_a) {
        var x = _a[0], y = _a[1];
        context.beginPath();
        context.moveTo(x, y);
    }
    var hue = 0;
    var lineWidth = 0;
    return function (_a) {
        var holding = _a.holding, cursor = _a.cursor;
        if (holding) {
            drawPath(cursor);
            changeColor(hsl([hue, 100, 50]));
            changeSize(lineWidth);
        }
        move(cursor);
        hue = (hue + 1) % 360;
        lineWidth = (lineWidth + 1) % 100;
    };
}
state({
    holding: false,
    cursor: [0, 0]
})
    .observe(function (dispatch) {
    window.addEventListener("pointerdown", function () { return dispatch({ type: "press" }); });
    window.addEventListener("pointermove", function (_a) {
        var x = _a.x, y = _a.y;
        return dispatch({ type: "execute", cursor: [x, y] });
    });
    window.addEventListener("pointerup", function () { return dispatch({ type: "release" }); });
})
    .reduce(function (state, event) {
    if (event.type === "press")
        return __assign(__assign({}, state), { holding: true });
    if (event.type === "execute")
        return __assign(__assign({}, state), { cursor: event.cursor });
    if (event.type === "release")
        return __assign(__assign({}, state), { holding: false });
})
    .then(Drawer());
