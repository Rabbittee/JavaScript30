var select = function (query) {
    return document.querySelector(query);
};
var play = function (audio) {
    audio.currentTime = 0;
    audio.play();
};
var glow = function (element, flag) {
    if (flag === void 0) { flag = true; }
    return element.classList.toggle("playing", flag);
};
var getKeyCode = function (key) { return key.toUpperCase().charCodeAt(0); };
function playAudioEffect(e) {
    var code = getKeyCode(e.key);
    glow(select(".key[data-key=\"".concat(code, "\"]")), true);
    return play(select("audio[data-key=\"".concat(code, "\"]")));
}
function releaseAudioEffect(e) {
    var code = getKeyCode(e.key);
    glow(select(".key[data-key=\"".concat(code, "\"]")), false);
}
document.addEventListener("keydown", playAudioEffect);
document.addEventListener("keyup", releaseAudioEffect);
