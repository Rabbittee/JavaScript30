# Javascript 30 days

## Day05-Flex Panels

**<font color=red>這不是 js 是 css! by 阿法</font>**

##### 使用技術

- tailwind 3.0
- vanilla js+vite

##### 使用 js 方法

- [querySelectorAll](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelectorAll)<br>
  將所有匹配的 DOM 都選取。

  ```js
  //這裡使用
  document.querySelectorAll();
  ```

- [forEach](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)<br>
  針對 array 每個 element 做一次想執行的事。

  ```js
  selectAll('.panel').forEach((panel) => panel.addEventListener('click', toggleOpen));
  ```

  -[.tagName](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/tagName)
  為 element 的標籤名稱。

  ```js
  if (current.tagName !== 'DIV') return;
  ```

-[transitionend](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/transitionend_event)
監聽當觸發 css transition。

```js
selectAll('.panel').forEach((panel) => panel.addEventListener('transitionend', toggleText));
```

-[.contains()](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMTokenList/contains)
確認當前 target 的 classList 有沒有特定的值。

```js
current.classList.contains('open');
```
