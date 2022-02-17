var selectAll = function (query) {
  return Array.from(document.querySelectorAll(query));
};
var add = function (a, b) {
  return a + b;
};
var totalTime = selectAll('.videos [data-time]')
  .map(function (item) {
    return item.dataset.time.split(':').map(Number);
  })
  .map(function (_a) {
    var min = _a[0],
      second = _a[1];
    return min * 60 + second;
  })
  .reduce(add, 0);
var hour = function (second) {
  return Math.floor(second / (60 * 60));
};
var min = function (second) {
  return Math.floor((second % (60 * 60)) / 60);
};
var sec = function (second) {
  return second % 60;
};
console.log(
  hour(totalTime),
  min(totalTime),
  sec(totalTime)
  //
);
