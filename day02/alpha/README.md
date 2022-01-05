# Javascript 30 days

## Day02-JS + CSS Clock

**<font color=red>數學不會就是不會！ by 阿法</font>**

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
- [CSS transform](https://developer.mozilla.org/zh-TW/docs/Web/CSS/transform)<br>
  使用 transform rotate 來變換指針的角度，題目中原本的 css 並沒有設定 [transform origin](https://developer.mozilla.org/zh-TW/docs/Web/CSS/transform-origin)，若為原本樣式他的旋轉中心則會是在指針中心，所以要偏離讓他固定在一邊。
  ```css
  /*這裡是用css*/
  .hand {
    transform-origin: 100%;
  }
  ```
- [HTMLElement.style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style)<br>
  可用來對 HTML 的 element 做 css 的 style 修改。style 後面可接 css 屬性接著賦值。

  ```js
  //這裡使用
  element.style.transform = `rotate${value}deg`;
  ``;
  ```

- [new Date()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date)
  用來取得目前時間。

  ```js
  //這裡使用
  nowTime = new Date();
  ```

  - 當中用到了幾個方法:`getHours()`取得小時 `getMinutes()`取得分鐘 `getSeconds()`取得秒數

- [setInterval()](https://developer.mozilla.org/zh-TW/docs/Web/API/setInterval)
  他和之前的 setTimeout 是常用的定時函式，差別是 setInterval 一般是在定時執行一次。
  ```js
  //這裡使用
  //每1000ms就是1秒會執行一次getClock
  setInterval(getClock, 1000);
  ```
