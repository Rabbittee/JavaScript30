import './style.css';

/**
 * 當按下鍵盤上關鍵字時會發出對應的音效以及帶有css效果
 */

//keydown better than keypress because keydown keycode is same between uppercase and lowercase
document.addEventListener('keydown', function (e) {
  const currentAudio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  //if keydown is not in keys then return
  if (!currentAudio) return;
  //initial audio time;
  currentAudio.currentTime = 0;
  //play() is audio tag's function;
  currentAudio.play();

  //same about css style event
  const currentKey = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!currentKey) return;
  currentKey.classList.add('play');
  //time out let the active effects off
  setTimeout(() => {
    currentKey.classList.remove('play');
  }, 100);
});
