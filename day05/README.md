# Day05-Flex Panel Gallery

## Summary
1. 運用`flex`排版與文字置中
2. 點擊文字時一樣能展開panel
3. `transform`實現panel展開後`滑入`與`滑出`文字效果


## 目前看到繞過文字讓panel可以正常展開的方法
### 原本的方法
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
- 滑鼠點擊div以外的tag都會被中斷
- 碰到`div.panel > span > p`或`div.panel`與`p`之間有更多層tag時，操縱的節點不一定是`div.panel`。

### [closest](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest)
```js
const toggleText = (e) => {
  const panel = e.target.closest(".panel"); // 選取最近的panel父節點
  if (panel.classList.contains('open')) {
    panel.classList.add('open-text')
  } else {
    panel.classList.remove('open-text')
  }
};
```
優點：
- 不管`div.panel`與`p`中間有多少層節點，可以直接選取父節點並操作。

### CSS3-[pointer-events](https://developer.mozilla.org/zh-CN/docs/Web/CSS/pointer-events)
```js
const toggleText = ({target}) => {
  target.classList.toggle('open-text',target.classList.contains('open')) // \感謝凱文/
};
```
```css
.panel *{ //將panel裡面的任何tag都將不會產生mouse event
    pointer-events: none;
}
```
優點：
- code更簡潔，只需處理`div.panel`
- 在元素事件之間更有彈性，如果容器的子元素設置了pointer-events為其它值，比如auto，還是會監聽該元素的mouse events。

缺點：
- 由於元素被預設none之後任何mouse event都將被忽略
- black magic，只看code的狀況下會不知道發生什麼事

以上是自己的整理，如果有誤歡迎指正

## Links

- [哈奇](https://rabbittee.github.io/JavaScript30/day05/Husky/)
