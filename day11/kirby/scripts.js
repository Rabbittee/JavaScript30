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
    var combiner = __assign(__assign({}, subject), { reduce: function (_reducer) {
            reducer = _reducer;
            return subject;
        } });
    function dispatch(action) {
        if (reducer)
            value = reducer(value, action);
        queueMicrotask(function () {
            effects.forEach(function (effect) { return effect(value, action, dispatch); });
        });
    }
    function observe(source) {
        source(dispatch);
        return combiner;
    }
    return { observe: observe };
}
var select = function (query) {
    return document.querySelector(query);
};
var selectAll = function (query) {
    return Array.from(document.querySelectorAll(query));
};
function is(type) {
    return function (value) {
        return value instanceof type;
    };
}
var lerp = function (x1, x2, t) { return x1 * (1 - t) + x2 * t; };
var percentage = function (x1, x2) { return (x1 / x2) * 100; };
state({
    playing: false,
    volume: 1,
    playbackRate: 1,
    progress: 0,
    video: select(".player video"),
    progressBar: select(".player .progress__filled")
})
    .observe(function (dispatch) {
    selectAll(".player .viewer, .player .toggle")
        //
        .forEach(function (el) {
        return el.addEventListener("click", function () { return dispatch({ type: "toggle" }); });
    });
    selectAll(".player input[type=range]")
        //
        .forEach(function (el) {
        return el.addEventListener("input", function (_a) {
            var target = _a.target;
            if (!is(HTMLInputElement)(target))
                return;
            if (target.name === "volume")
                return dispatch({
                    type: "volume",
                    value: Number(target.value)
                });
            if (target.name === "playbackRate")
                return dispatch({
                    type: "playbackRate",
                    value: Number(target.value)
                });
        });
    });
    select(".player .viewer")
        //
        .addEventListener("timeupdate", function (_a) {
        var target = _a.target;
        if (!is(HTMLVideoElement)(target))
            return;
        return dispatch({
            type: "progress",
            value: Math.floor(percentage(target.currentTime, target.duration))
        });
    });
    select(".player .progress")
        //
        .addEventListener("click", function (e) {
        if (!is(PointerEvent)(e))
            return;
        var target = e.currentTarget;
        if (!is(HTMLDivElement)(target))
            return;
        return dispatch({
            type: "updateProgress",
            value: Math.floor(percentage(e.offsetX, target.clientWidth))
        });
    });
    selectAll(".player button")
        //
        .forEach(function (el) {
        return el.addEventListener("click", function (_a) {
            var target = _a.target;
            if (!is(HTMLButtonElement)(target))
                return;
            var _b = select(".player video"), currentTime = _b.currentTime, duration = _b.duration;
            var value = currentTime + Number(target.dataset.skip);
            return dispatch({
                type: "updateProgress",
                value: Math.floor(percentage(value, duration))
            });
        });
    });
})
    .reduce(function (state, action) {
    if (action.type === "toggle")
        return __assign(__assign({}, state), { playing: !state.playing });
    if (action.type === "volume")
        return __assign(__assign({}, state), { volume: action.value });
    if (action.type === "playbackRate")
        return __assign(__assign({}, state), { playbackRate: action.value });
    if (action.type === "progress")
        return __assign(__assign({}, state), { progress: action.value });
    return state;
})
    .then(function (_a, action) {
    var playing = _a.playing, progress = _a.progress, progressBar = _a.progressBar, video = _a.video, volume = _a.volume, playbackRate = _a.playbackRate;
    playing ? video.play() : video.pause();
    video.playbackRate = playbackRate;
    video.volume = volume;
    progressBar.style.flexBasis = "".concat(progress, "%");
    if (action.type === "updateProgress")
        video.currentTime = lerp(0, video.duration, action.value / 100);
});
