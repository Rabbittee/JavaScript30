import "./style.css";
import "./src/header";

// thanks fei fei
const getKeycode = (e) => {
  return e.key.toUpperCase().charCodeAt();
};

const play = (currentAudio) => {
  //if keydown is not in keys then return
  if (!currentAudio) return;
  //initial audio time;
  currentAudio.currentTime = 0;
  //play() is audio tag's function;
  currentAudio.play();
};

const toggleClass = (currentKey, isActive = false) => {
  if (!currentKey) return;
  currentKey.classList.toggle("play", isActive);
};

const keyDown = (e) => {
  const currentAudio = document.querySelector(
    `audio[data-key="${getKeycode(e)}"]`
  );
  const currentKey = document.querySelector(`div[data-key="${getKeycode(e)}"]`);
  play(currentAudio);
  toggleClass(currentKey, true);
};

const keyUp = (e) => {
  const currentKey = document.querySelector(`div[data-key="${getKeycode(e)}"]`);
  toggleClass(currentKey, false);
};
/**
 * 當按下鍵盤上關鍵字時會發出對應的音效以及帶有css效果
 */

//keydown better than keypress because keydown keycode is same between uppercase and lowercase
document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);
