# Javascript 30 Days

## day05 - Flex Panel Gallery

#### Logic

```js
1   const $ = (target) => document.querySelectorAll(target);
2
3   function Elements(list) {   //建立移除className的方法
4     return function (className) {
5       list.forEach(function (node) {
6         node.classList.remove(className);
7       });
8     };
9   }
10
11  const panels = $(".panel"); //抓取全部帶有panel的className
12  const removeAllPanelClass = Elements(panels); //將抓到的tag們塞給待會要移除className的方法
```

<p> **注意動畫順序** panel先打開完內容再接著進來</p>

```js
14  panels.forEach(function (element) {
15    element.addEventListener("click", function (e) {//監聽每個 tag 的 click
16      if (e.target.classList.contains("open")) {
17        e.target.classList.remove("open");
18      } else {
19        removeAllPanelClass("open"); //將每個 panel 的 open 移除
20        e.target.classList.add("open");
21      }
22    });
23    element.addEventListener("transitionend", function (e) {//open的transition結束後執行該函式
24      if (e.target.classList.contains("open"))
25        e.target.classList.add("open-active");
25      else e.target.classList.remove("open-active");
27    });
28  });
```

#### Stack

##### JS

- [document.querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)
- [classList.contains](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/contains)
- [classList.add](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/add)
- [classList.remove](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/remove)
- [transitionend event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/transitionend_event)

##### CSS

- [display](https://developer.mozilla.org/en-US/docs/Web/CSS/display)

- [flex](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)

- [translateY()](<https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translateY()>)

- [pointer-events](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events)
