# Javascript 30 Days

## day07 - Array Cardio Day 2

#### 邏輯

1. Array.prototype.some() // is at least one person 19 or older?

   1. 用`Array.some()`帶入比較條件`(p) => time.getFullYear() - p.year >= 19`

2. Array.prototype.every() // is everyone 19 or older?

   1. 用`Array.every()`帶入比較條件`(p) => time.getFullYear() - p.year >= 19`

3. Find is like filter, but instead returns just the one you are looking for find the comment with the ID of 823423
   1. 用`Array.find()`帶入比較條件`(payload) => payload.id === 823423`
4. Find the comment with this ID

   1. 用`Array.findIndex()`帶入比較條件`(payload) => payload.id === 823423`
   2. 將第一步取得的值用`slice`排除`id為823423`的物件

#### 學到了什麼？

- [Array.some()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
- [Array.every()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
- [Array.find()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [Array.findIndex()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
- [Array.slice()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
