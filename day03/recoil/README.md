# Javascript 30 Days

## day03 - JS and CSS Clock

#### Logic

##### style.css

```css
  1   :root { /*在根元素宣告CSS變數名稱晚點會與input做連動*/
  2     --spacing: 0px;
  3     --blur: 0px;
  4     --base: #ffffff;
  5   }
```

```css
  24  img {/*用var()引用剛剛宣告的CSS變數名稱*/
  25    padding: var(--spacing);
  26    filter: blur(var(--blur));
  27    background: var(--base);
  28  }
```

##### script.js

```js
  1   const root = document.documentElement; //抓取根元素
```

```js
  3   const $ = (target) => document.querySelectorAll(target);//建立選擇器抓取元素們
```

```js
  5   function handleValue(target) {//將Element的dataset處理成待會要給style的數值
  6     const sizing = target.dataset?.sizing ?? "";//抓到的標籤若有 sizing 這個屬性就引用，否則是 ""
  7     return target.value + sizing;
        /*  將 Element的value 與 data-sizing 合併成style需要的值
         *  exp:<input id="blur" type="range" name="blur" min="0" max="25" value="10" data-sizing="px">
         *    將會取得 value="10" 與 data-sizing="px"
         *    最後返回的值會是 10px
        */
  8   }
}
```

```js
  14  function initController(nodes) {//將抓取到的節點初始化
  15    nodes.forEach(function (node) {
  16      root.style.setProperty(`--${target.name}`, handleValue(node));
  17    });
  18    return nodes;
  19  }
```

```js
  21  function watchController(nodes) {//監聽抓取到的節點
  22    nodes.forEach(function (node) {
  23      node.addEventListener("change", handleUpdate);
  24    });
  25    return nodes;
  26  }
```

```js
  28  const inputs = $(".controls > input");
```

```js
  30  function run() {//將抓到的input先初始化,最後再執行監聽
  31    Promise.resolve(inputs).then(initController).then(watchController);
  32  }
  33  run();
```

#### Stack

##### style.css

- [:root](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:root)
- [Using_CSS_custom_properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

```css
  1   :root {
  2     --spacing: 0px;
  3     --blur: 0px;
  4     --base: #ffffff;
  5   }
```

- [var()](<https://developer.mozilla.org/zh-CN/docs/Web/CSS/var()>)

```css
  25    padding: var(--spacing);
  26    filter: blur(var(--blur));
  27    background: var(--base);
```

##### script.js

- [document.documentElement](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/documentElement)

```js
  1   const root = document.documentElement;
```

- [document.querySelectorAll](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelectorAll)

```js
  3   const $ = (target) => document.querySelectorAll(target);
```

- [Use_data_attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)
- [Optional_chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [Nullish_coalescing_operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)

```js
  6     const sizing = target.dataset?.sizing ?? "";
```

- [setProperty](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty)

```js
  16    root.style.setProperty(`--${target.name}`, handleValue(target));
```

- [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

```js
  23    node.addEventListener("change", handleUpdate);
  24    node.addEventListener("mousemove", handleUpdate);
```

- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

```js
  32    Promise.resolve(inputs).then(initController).then(watchController);
```
