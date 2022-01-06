# Javascript 30 Days

## day07 - Array Cardio Day 2

#### Logic

```js
const time = new Date();
```

```js
// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const time = new Date();
const hasSomeAdult = people.some((p) => time.getFullYear() - p.year >= 19);
console.log({ hasSomeAdult });
```

```js
// Array.prototype.every() // is everyone 19 or older?
const isAllAdult = people.every((p) => time.getFullYear() - p.year >= 19);
console.log({ isAllAdult });
```

```js
// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const comment = comments.find((payload) => payload.id === 823423);
console.log(comment);
```

```js
// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const index = comments.findIndex((payload) => payload.id === 823423);
comments.splice(index, 1);
console.table(comments);
```

#### Stack

##### JS

- [Array.some()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
- [Array.every()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
- [Array.find()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [Array.findIndex()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
- [Array.splice()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
