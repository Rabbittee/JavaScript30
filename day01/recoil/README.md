# Javascript 30 Days

## day01 - Flex Panel Gallery

#### Logic

```js
const $ = (target) => document.querySelectorAll(target);
const keyboards = $("div[data-key]"); //把帶data-key的div選起來
window.addEventListener("keydown", function (event) {
  // 監聽 keydown Event
  keyboards.forEach(function (element) {
    if (element.dataset.key === event.code) {
      // 比對按下的按鍵
      element.classList.add("playing"); //移除 playing className
      const audio = document.querySelector(
        `audio[data-key=${element.dataset.key}]`
      ); //捕捉keyboard對應的audio
      audio.currentTime = 0; //重置播放時間，避免播放時按下沒反應
      audio.play(); //播放聲音
    }
  });
});

window.addEventListener("keyup", function (event) {
  // 監聽 keyup Event
  keyboards.forEach(function (element) {
    if (element.dataset.key === event.code) {
      // 比對放開的按鍵
      element.classList.remove("playing"); //移除 playing className
    }
  });
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
