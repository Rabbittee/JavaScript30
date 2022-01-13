window.addEventListener("keydown", getKeyCode);
const keysContainer = document.querySelector(".keys");

function getKeyCode(event) {
  const keyCode = event.keyCode;
  matchDataKey(keyCode);
}

function matchDataKey(key) {
  const targetList = document.querySelectorAll(`[data-key="${key}"]`);
  if (!targetList) return;
  const [DOMElement, audioDOM] = targetList;
  addStyle(DOMElement);
  audioDOM.play();
}

function addStyle(targetDOM) {
  targetDOM.classList.add("playing");
  setTimeout(() => targetDOM.classList.remove("playing"), 150);
}
