var select = function (query) {
  return document.querySelector(query);
};
select('.panels').addEventListener('click', function (_a) {
  var _b;
  var target = _a.target;
  if (!(target instanceof Element)) return;
  (_b = target.closest('.panel')) === null || _b === void 0 ? void 0 : _b.classList.toggle('open');
});
