var selectAll = function (qs) {
  return Array.from(document.querySelectorAll(qs));
};
var rect = function (_a) {
  var width = _a.width,
    height = _a.height,
    top = _a.top,
    left = _a.left;
  return {
    width: width,
    height: height,
    top: top,
    left: left,
  };
};
function highlight(it) {
  it.classList.add('highlight');
  document.body.append(it);
  return function (el) {
    return function () {
      return (
        Object.entries(rect(el.getBoundingClientRect()))
          //
          .forEach(function (_a) {
            var key = _a[0],
              value = _a[1];
            return it.style.setProperty('--'.concat(key), ''.concat(value, 'px'));
          })
      );
    };
  };
}
var stick = highlight(document.createElement('div'));
selectAll('a').forEach(function (el) {
  return el.addEventListener('pointerenter', stick(el));
});
