document.body.addEventListener("keydown", getKey, false);

function getKey(e) {
  const char = e.key.toUpperCase().charCodeAt();
  const audio = document.querySelector(`audio[data-key="${char}"]`);
  const target = document.querySelector(`div[data-key="${char}"]`);
  if (!audio) return false;
  audio.currentTime = 0;
  audio.play();
  target.classList.add("playing");
  target.addEventListener("transitionend", removeClass);
}

function removeClass() {
  const keys = document.querySelectorAll(".key");
  keys.forEach((el) => {
    el.classList.remove("playing");
  });
}
