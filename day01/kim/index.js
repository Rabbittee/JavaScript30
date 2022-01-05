// Day01: When keydown , play music and change style.
window.addEventListener("keydown", function (event) {
  // Which keycode
  const keyCurrent = event.keyCode;

  (function playAudio() {
    // Keycode of audio tag
    const audioClass = document.querySelector(
      `audio[data-key='${keyCurrent}']`
    );
    if (!audioClass) return;

    // keycode = audio, play music
    audioClass.play();
  })();

  (function transitionStyle() {
    // Keycode of div
    const audioDivClass = document.querySelector(
      `div[data-key='${keyCurrent}']`
    );

    // add
    audioDivClass.classList.add("playing");

    // remove at transitionend
    audioDivClass.addEventListener("transitionend", function () {
      audioDivClass.classList.remove("playing");
    });
  })();
});
