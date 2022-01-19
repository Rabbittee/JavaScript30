const panels = document.querySelectorAll('.panel');
panels.forEach((panel) => {
  panel.addEventListener('click', function () {
    if (panel.classList.contains('open')) {
      panel.classList.remove('open');
    } else {
      panels.forEach((item) => item.classList.remove('open'));
      panel.classList.add('open');
    }
  });
});
