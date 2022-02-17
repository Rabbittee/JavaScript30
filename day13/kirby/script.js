var selectAll = function (query) {
  return Array.from(document.querySelectorAll(query));
};
var callback = function (entries) {
  return entries
    .filter(function (entry) {
      return entry.isIntersecting;
    })
    .forEach(function (entry) {
      return entry.target.classList.add('active');
    });
};
var observer = new IntersectionObserver(callback, {
  rootMargin: '0px',
  threshold: 0.8,
});
selectAll('.slide-in').forEach(function (el) {
  return observer.observe(el);
});
