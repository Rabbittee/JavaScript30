// When keydown , the keycode = audio data-key, call the sound and change the class style
window.addEventListener("keydown", function (e) {
  // call keycode
  const keyCurrent = e.keyCode;
  console.log(keyCurrent);

  // call class
  const audioClass = document.querySelector(`audio[data-key='${keyCurrent}']`);
  console.log(audioClass);

  // if keycode === calss
  // console.log("Right")
});
