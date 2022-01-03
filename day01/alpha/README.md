# Javascript 30 days

## Day01-JS Drum Kit

##### 使用技術

- tailwind 3.0
- vanilla js+vite

##### 使用 js 方法

- [querySelector](https://developer.mozilla.org/zh-TW/docs/Web/API/Document/querySelector)<br>
  用於選取想操作的 DOM
  ```js
  //這裡使用
  document.querySelector();
  ```
- [html data-\*](https://developer.mozilla.org/zh-TW/docs/Web/HTML/Global_attributes/data-*)<br>
  早期常用來連結多個 DOM 操作，**但因為可顯示在使用者端容易被修改已經不建議使用**。

  ```js
  //這裡可以抓題目裡的data-key
  `audio[data-key="${value}"]`;
  ```

- [EventListener](https://developer.mozilla.org/zh-TW/docs/Web/API/EventListener)<br>
  監聽 DOM

  ```js
  //這裡使用
  document.addEventListener('keydown', function () {});
  ```

  - [Keyboard Event](https://developer.mozilla.org/zh-TW/docs/Web/API/KeyboardEvent)<br>
    運用 keydown 方法<br>
    keyup/keydown/keypress 三種方法，不使用 keypress 是因為此次希望大小寫字母點擊下去可以抓到的 keycode 是一樣的，所以選擇 keydown。

- [html audio tag](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/audio)<br>
  操作 audio 這個 html 標籤

  - 使用到<font color=#FF6600>currentTime</font>屬性，因為每個音頻長度不一樣，希望在連續點擊可以立即重新播放，故每當點擊時會歸零播放時間位置。

    ```js
    //這裡使用
    currentAudio.currentTime = 0;
    ```

  - 使用到<font color=#00ffff>play()</font>方法，可以播放該標籤中的音頻。

    ```js
    currentAudio.play();
    ```

- [Element.classList](https://developer.mozilla.org/zh-TW/docs/Web/API/Element/classList)<br>
  操作目標 DOM 的 class。

  - 使用到<font color=#00ffff>add()</font>以及<font color=#00ffff>remove()</font>方法，來增加或者移除 class。

    ```js
    //這裡使用
    currentKey.classList.add('play');
    currentKey.classList.remove('play');
    ```

- [setTimeout()](https://developer.mozilla.org/zh-CN/docs/Web/API/setTimeout)<br>
  在定時操作指定方法，因為想快速移除點擊時的效果所以搭配使用。

  ```js
  //這裡使用
  setTimeout(() => {
    currentKey.classList.remove('play');
  }, 100);
  ```
