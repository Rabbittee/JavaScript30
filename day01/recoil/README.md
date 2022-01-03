# Javascript 30 Days

## Day01 - **Drum Kit**

#### Stack

- vanilla Javascript

### methods

- [document.querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
  ```js
    5     const $ = (target) => document.querySelectorAll(target);
    6     const keyboards = $("div[data-key]");//抓取帶有data-key屬性的div
  ```


- [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
  ```js
    8     window.addEventListener("keydown",function(){});//監聽鍵盤按下事件
  ```


- [KeyboardEvent.code](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code)
  ```js
    12  if (element.dataset.key === event.code) //抓到node.dataset.key(data-key)的值若等於按下的code
  ```


- [element.classList](https://developer.mozilla.org/zh-TW/docs/Web/API/Element/classList)
  ```js
    14  element.classList.add("playing");//符合node的 ClassName 新增 playing 
  ```


- [document.querySelector](https://developer.mozilla.org/zh-TW/docs/Web/API/Document/querySelector)
  ```js
    15  const audio = document.querySelector(
    16      `audio[data-key=${element.dataset.key}]`
    17  );//抓取符合該key的 audio 標籤
  ```


- [HTMLAudioElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement)
  ```js
    18  audio.currentTime = 0; //每次撥放時重置撥放時間
    19  audio.play(); //撥放音檔
  ```


- [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
  ```js
    24  window.addEventListener("keyup",function(){});//監聽鍵盤放開事件
  ```

### 為何選擇 <span style="color:rgb(53,81,201)">**code**</span> 而不是 <span style="color:rgb(53,81,201)">**keyCode**</span> ?


- [KeyboardEvent.keyCode](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode) <span style="color:rgb(183,81,88)">**非長期推薦**</span>
    >Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.
  
### 為何選擇 <span style="color:rgb(53,81,201)">**keyup**</span> 而不是 <span style="color:rgb(53,81,201)">**transisitionend**</span>?
  ```js
    24  window.addEventListener("keyup",function(){})
  ```
  **transitionend** 會在 css 動畫結束後觸發該方法，
  若持續按著按鍵再放開會無法觸發該方法

