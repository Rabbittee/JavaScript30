const nav = document.querySelector('nav');

document.addEventListener('DOMContentLoaded', function () {
  const observer = new IntersectionObserver(
    ([e]) => e.target.classList.toggle('fixed-nav', e.intersectionRatio < 1),
    { threshold: [1] }
  );
  observer.observe(nav);
});
