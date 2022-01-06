const $ = (target) => document.querySelectorAll(target);
const keyboards = $("div[data-key]")
window.addEventListener("keydown", function (event) {
  keyboards.forEach(function (element) {
    if (element.dataset.key === event.code) {
      element.classList.add("playing");
      const audio = document.querySelector(
        `audio[data-key=${element.dataset.key}]`
      );
      audio.currentTime = 0;
      audio.play();
    }
  });
});

window.addEventListener("keyup", function (event) {
  keyboards.forEach(function (element) {
    if (element.dataset.key === event.code) {
      element.classList.remove("playing");
    }
  });
});
