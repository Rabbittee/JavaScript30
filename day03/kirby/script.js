var select = function (query) { return document.querySelector(query); };
var setProperty = function (element) { return function (property, value) { return element.style.setProperty("--".concat(property), value); }; };
select(".controls").addEventListener("input", function (_a) {
    var target = _a.target;
    if (!(target instanceof HTMLInputElement))
        return;
    setProperty(select("img"))(target.name, "".concat(target.value).concat(target.dataset.sizing || ""));
});
