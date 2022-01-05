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
