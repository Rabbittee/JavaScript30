const $ = (target) => document.querySelectorAll(target);

window.addEventListener("keydown", function (event) {
  $("div[data-key]").forEach(function (element) {
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
  $("div[data-key]").forEach(function (element) {
    if (element.dataset.key === event.code) {
      element.classList.remove("playing");
    }
  });
});
