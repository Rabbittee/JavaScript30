const $ = (target) => document.querySelector(target);

window.addEventListener('keydown', function (event) {
  const keyboard = $(`div[data-key='${event.code}']`);
  const audio = $(`audio[data-key='${event.code}']`);
  if (!keyboard && !audio) return;
  keyboard.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
});

window.addEventListener('keyup', function (event) {
  const keyboard = $(`div[data-key='${event.code}']`);
  if (!keyboard) return;
  keyboard.classList.remove('playing');
});
