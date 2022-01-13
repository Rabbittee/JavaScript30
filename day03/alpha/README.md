# Javascript 30 days

## Day03-Scoped CSS Variables and JS

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

- [HTMLElement.style](https://developer.mozilla.org/zh-CN/docs/Web/API/CSSStyleDeclaration/setProperty)<br>
  可用來對 HTML 的 element 做 css 的 style 修改。給予指定的 css property 跟賦值。

  ```js
  //這裡使用
  element.style.setProperty(property, value);
  ```

- [css :root](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:root)<br>
  當在 css 裡有寫入變量時，可以使用:root 放入預設值。

  ```css
  :root {
    --spacing: 10px;
  }
  ```

- [EventListener input event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)<br>
  可監聽 HTML 的 element 是<font color=#FF0000>input 或者 textarea</font>的 value 是否有改變。

  ```js
  element.addEventListener("input", funciton() {})
  ```
