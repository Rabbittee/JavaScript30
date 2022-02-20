var tap = function (fn) {
  return function (arg) {
    return fn(arg), arg;
  };
};
var select = function (query) {
  return document.querySelector(query);
};
var selectAll = function (query) {
  return Array.from(document.querySelectorAll(query));
};
function invariant(cond, message) {
  if (cond) return;
  throw new Error(message);
}
// Sticky Change Observation
var observer = new IntersectionObserver(
  function (entries) {
    return entries.forEach(function (_a) {
      var target = _a.target,
        isIntersecting = _a.isIntersecting;
      return target.dispatchEvent(
        new CustomEvent('stick-change', { detail: { isIntersecting: isIntersecting } })
      );
    });
  },
  { threshold: 1 }
);
selectAll('nav.sticky')
  .map(
    tap(function (el) {
      return observer.observe(el);
    })
  )
  .map(
    tap(function (el) {
      return el.addEventListener('stick-change', function (_a) {
        var target = _a.target,
          detail = _a.detail;
        invariant(target instanceof HTMLElement, 'target should be HTMLElement');
        // see style detail in style.css
        document.body.classList //
          .toggle('active', !detail.isIntersecting);
      });
    })
  );
