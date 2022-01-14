var select = function (query) {
    return document.querySelector(query);
};
var selectAll = function (query) {
    return document.querySelectorAll(query);
};
var setProperty = function (element) { return function (property, value) { return element.style.setProperty("--".concat(property), value); }; };
var update = function (target) {
    return setProperty(select("body"))(target.name, "".concat(target.value).concat(target.dataset.sizing || ""));
};
selectAll(".controls input").forEach(update);
select(".controls").addEventListener("input", function (_a) {
    var target = _a.target;
    if (!(target instanceof HTMLInputElement))
        return;
    update(target);
});
