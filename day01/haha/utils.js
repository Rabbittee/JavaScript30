document.body.addEventListener("keydown", getKey, false);

function getKey(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const target = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return false;
  audio.play();
  target.classList.add("playing");
  target.addEventListener("transitionend", removeClass);
}

function removeClass() {
  const keys = document.querySelectorAll(".key");
  keys.forEach((el) => {
    if (el.classList.contains("playing")) {
      el.classList.remove("playing");
    }
  });
}
