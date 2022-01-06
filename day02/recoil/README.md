# Javascript 30 Days

## day02 - JS and CSS Clock

#### Logic

```js
  1     const $ = (target) => document.querySelector(target); //建立抓取物件的方法
```

```js
  3     const degree = (time = 0) =>
  4         `transform: rotateZ(${time + 90}deg);`;//設定指針角度的方法
```

```js
  5     const hourElement = $(".hour-hand"); //抓取時針 Element
  6     const minuteElement = $(".min-hand"); //抓取分針 Element
  7     const secondElement = $(".second-hand"); //抓取秒針 Element
```

```js
  8     const sixDeg = 360 / 60;
  9     const minuteDeg = 30 / 60;
  10    const hourDegree = 360 / 12;
```

```js
  14     setInterval(() => {
  15       const now = new Date(); //建立Date實體取得現在時間
  16       secondElement.style = degree(now.getSeconds() * sixDeg);
  17        minuteElement.style = degree(now.getMinutes() * sixDeg);
  18        hourElement.style = degree((now.getHours() * hourDegree)+(now.getMinutes() * minuteDegree));
  19    }, 1000);//第二參數是毫秒，由於1000毫秒等於１秒故設定成1000，相當每秒會呼叫一次第一參數的函式
```

#### Stack

##### JS

- [document.querySelector](https://developer.mozilla.org/zh-TW/docs/Web/API/Document/querySelector)

```js
  1 const $ = (target) => document.querySelector(target);
```

- [setInterval](https://developer.mozilla.org/zh-TW/docs/Web/API/setInterval)

```js
  14  setInterval(() => {
  15    ...
  19  }, 1000);
```

- [Date](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date)

```js
  15    const now = new Date();
  16    secondElement.style = degree(now.getSeconds() * secondDegree);
  17    minuteElement.style = degree(now.getMinutes() * minuteDegree);
  18    hourElement.style = degree(now.getHours() * hourDegree);
```

##### CSS

- [transform](https://developer.mozilla.org/zh-TW/docs/Web/CSS/transform)

```js
  3     const degree = (time = 0) =>
  4       `transform: rotateZ(${time + 90}deg); transform-origin:right;`;
```

- [transform-origin](https://developer.mozilla.org/zh-TW/docs/Web/CSS/transform-origin)

```css
  53    transform-origin:right;
```
