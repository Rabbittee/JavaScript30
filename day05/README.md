# Day05-Flex Panel Gallery

## Summary
1. 運用`flex`排版與文字置中
2. 點擊文字時一樣能展開panel
3. `transform`實現panel展開後`滑入`與`滑出`文字效果
## 解決繞過文字讓panel可以正常展開的方法
### 方法一 
```js
const toggleText = (e) => {
  const current = e.target;
  if (current.tagName !== 'DIV') return 
  if (current.classList.contains('open')) {
    current.classList.add('open-text')
  } else {
    current.classList.remove('open-text')
  }
};
```
優點：
- 單純父子關係時可以正常運作
缺點：
- 碰到`div.panel > span > p`或`div.panel`與`p`之間有更多層tag時，操縱的節點不一定是`div.panel`。

### 方法二 [closest](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest)
```js
const toggleText = (e) => {
  const { classList } = e.target.closest(".panel"); // 選取最近帶有.panel的父節點
  classList.toggle('open-text',classList.contains('open'));
};
```
優點：
- 不管`div.panel`與`p`中間有多少層節點，可以直接選取父節點並操作。

### 方法三 [pointer-events](https://developer.mozilla.org/zh-CN/docs/Web/CSS/pointer-events)
```js
const toggleText = ({target:{ classList }}) => {
  classList.toggle('open-text',classList.contains('open')); // \感謝凱文/
};
```
```css
.panel *{ //panel裡面的任何tag都將虛化，不會產生pointer event
    pointer-events: none;
}
```
優點：
- code更簡潔，只需處理`div.panel`
- 如果容器的子元素設置了pointer-events為其它值，比如auto，還是會監聽該元素的pointer events。

缺點：
- black magic，只看code的狀況下會不知道發生什麼事

以上是自己的整理，如果有誤歡迎指正


## Links

- [哈奇](https://rabbittee.github.io/JavaScript30/day05/Husky/)
- [凱文](https://rabbittee.github.io/JavaScript30/day05/kevin/)
- [奶捲](https://rabbittee.github.io/JavaScript30/day05/recoil/)
