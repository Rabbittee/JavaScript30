const $ = (target) => document.querySelectorAll(target);

const panels = $(".panel");

panels.forEach(function (element) {
  element.addEventListener('click', function ({ target: { classList } }) {
    classList.toggle('open');
  });
  element.addEventListener(
    'transitionend',
    function ({ target: { classList } }) {
      classList.contains("open") ? classList.add("open-active") : classList.remove("open-active");
    }
  );
});