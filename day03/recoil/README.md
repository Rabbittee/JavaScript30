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
