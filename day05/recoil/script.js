const $ = (target) => document.querySelectorAll(target);

const panels = $('.panel');

panels.forEach(function (element) {
  element.addEventListener('click', function ({ target: { classList } }) {
    classList.toggle('open');
  });
  element.addEventListener('transitionend', function ({ target: { classList } }) {
    classList.toggle('open-active', classList.contains('open'));
  });
});
