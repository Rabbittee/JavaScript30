document.addEventListener('keydown', keydownHandler);
document.addEventListener('keyup', keyupHandler);

// * 紀錄那些正在被觸發的 keycode
const activeKeys = new Set();

// * 按下去的時候
function keydownHandler(event) {
  const keycode = getKeycode(event);
  if (activeKeys.has(keycode)) return;

  playAudio(keycode);
  toggleActiveBoxClass(keycode, true);
  activeKeys.add(keycode);
}

// * 放開的時候
function keyupHandler(event) {
  const keycode = getKeycode(event);
  activeKeys.delete(keycode);
  toggleActiveBoxClass(keycode, false);
}

function getKeycode(event) {
  return event.key.toUpperCase().charCodeAt();
}

// * Audio relates functions =======
function getTargetAudio(keycode) {
  return document.querySelector(`audio[data-key="${keycode}"]`);
}

function playAudio(keycode) {
  const targetAudio = getTargetAudio(keycode);

  if (targetAudio === null) return;
  targetAudio.currentTime = 0;
  targetAudio.play();
}

// * View relates functions ======
function toggleActiveBoxClass(keycode, isActive = false) {
  const activeClassName = 'playing';
  const targetBox = document.querySelector(`.key[data-key="${keycode}"]`);

  if (targetBox === null) return;
  targetBox.classList.toggle(activeClassName, isActive);
}
