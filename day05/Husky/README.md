# day05 重點啦

### closest selectors
https://developer.mozilla.org/en-US/docs/Web/API/Element/closest

### CSS transition 必須內容都樣一樣或是有跟沒有，不能有差異的自動補齊

```CSS
/* 錯誤 */
filter: drop-shadow(4px 4px 2px #dbac98);
filter: invert(100%);

/* 正確 */
filter: drop-shadow(4px 4px 2px #dbac98) invert(0);
filter: drop-shadow(0 0 0 #63918c) invert(100%);
```