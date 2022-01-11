# Javascript 30 Days

## day01 - Flex Panel Gallery

#### Logic

```js
const $ = (target) => document.querySelector(target);
window.addEventListener("keydown", function (event) {
  //監聽鍵盤按下事件
  const keyboard = $(`div[data-key='${event.code}']`);
  const audio = $(`audio[data-key='${event.code}']`);
  if (!keyboard && !audio) return; // early return 感謝哈奇大大指導
  keyboard.classList.add("playing"); //給按鍵添加 playing className
  audio.currentTime = 0; //重置音檔播放時間
  audio.play(); //播放音檔
});

window.addEventListener("keyup", function (event) {
  //監聽鍵盤按下事件
  const keyboard = $(`div[data-key='${event.code}']`);
  if (!keyboard) return; // early return
  keyboard.classList.remove("playing"); //移除按鍵的 playing className
});
```

#### Stack

##### JS

- [querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
- [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)
- [audio](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)
- [classList.add](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/add)
- [classList.remove](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/remove)
