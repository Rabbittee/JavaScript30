var inRange = function (min, max) { return function (value) {
    return max > value && value > min;
}; };
var select = function (query) {
    return document.querySelector(query);
};
var append = function (el) { return function (child) { return el.append(child); }; };
function frameUpdate(fn) {
    var update = function () {
        fn();
        requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
}
var play = function (element) {
    return element.play().then(function () { return element; });
};
var media = function (video) { return function (stream) {
    video.srcObject = stream;
    return play(video);
}; };
var Effects = {
    Grayscale: function (src, dist, _) {
        for (var i = 0; i < src.length; i += 4) {
            var value = (src[i + 0] + src[i + 1] + src[i + 2]) / 3;
            dist[i + 0] = value;
            dist[i + 1] = value;
            dist[i + 2] = value;
            dist[i + 3] = src[i + 3];
        }
    },
    RGBSplit: function (src, dist, state) {
        var _a = state.rgbOffset, offsetR = _a[0], offsetG = _a[1], offsetB = _a[2];
        for (var i = 0; i < src.length; i += 4) {
            dist[i + 0 + offsetR * 4] = src[i + 0];
            dist[i + 1 + offsetG * 4] = src[i + 1];
            dist[i + 2 + offsetB * 4] = src[i + 2];
            dist[i + 3] = src[i + 3];
        }
    },
    GreenScreen: function (src, dist, state) {
        var isRedIn = inRange(state.red.min, state.red.max);
        var isGreenIn = inRange(state.green.min, state.green.max);
        var isBlueIn = inRange(state.blue.min, state.blue.max);
        for (var i = 0; i < src.length; i += 4) {
            dist[i + 0] = src[i + 0];
            dist[i + 1] = src[i + 1];
            dist[i + 2] = src[i + 2];
            dist[i + 3] = src[i + 3];
            if (!isRedIn(src[i + 0]) &&
                !isGreenIn(src[i + 1]) &&
                !isBlueIn(src[i + 2])) {
                dist[i + 3] = 0;
            }
        }
    }
};
var renderer = function (canvas, state) { return function (source) {
    var ctx = canvas.getContext("2d");
    var width = source.videoWidth, height = source.videoHeight;
    Object.assign(canvas, { width: width, height: height });
    frameUpdate(function () {
        ctx.drawImage(source, 0, 0, width, height);
        var src = ctx.getImageData(0, 0, width, height);
        var dist = ctx.createImageData(src);
        state.effect(src.data, dist.data, state);
        ctx.putImageData(dist, 0, 0);
    });
}; };
var snapshot = function (canvas) { return function () {
    return new Promise(function (resolve) {
        return canvas.toBlob(function (blob) {
            var image = new Image();
            image.src = URL.createObjectURL(blob);
            image.addEventListener("load", function () {
                URL.revokeObjectURL(image.src);
                resolve(image);
            });
        });
    });
}; };
var audio = function (audio) { return function () { return play(audio); }; };
var state = {
    effect: Effects.Grayscale,
    rgbOffset: [10, -5, 10],
    red: { min: 0, max: 0 },
    green: { min: 0, max: 0 },
    blue: { min: 0, max: 0 }
};
select(".rgb").addEventListener("input", function (_a) {
    var target = _a.target;
    if (!(target instanceof HTMLInputElement))
        return;
    if (target.name === "rmin") {
        state.red.min = Number(target.value);
    }
    if (target.name === "rmax") {
        state.red.max = Number(target.value);
    }
    if (target.name === "gmin") {
        state.green.min = Number(target.value);
    }
    if (target.name === "gmax") {
        state.green.max = Number(target.value);
    }
    if (target.name === "bmin") {
        state.blue.min = Number(target.value);
    }
    if (target.name === "bmax") {
        state.blue.max = Number(target.value);
    }
});
select("select").addEventListener("change", function (_a) {
    var target = _a.target;
    if (!(target instanceof HTMLSelectElement))
        return;
    if (target.value === "Grayscale") {
        state.effect = Effects.Grayscale;
    }
    if (target.value === "RGBSplit") {
        state.effect = Effects.RGBSplit;
    }
    if (target.value === "GreenScreen") {
        state.effect = Effects.GreenScreen;
    }
});
navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(media(select(".player")))
    .then(renderer(select(".photo"), state));
var take = snapshot(select(".photo"));
select("button").addEventListener("click", function () {
    return take()
        .then(append(select(".strip")))
        .then(audio(select(".snap")));
});
