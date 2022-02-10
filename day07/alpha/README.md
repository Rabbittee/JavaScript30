# Javascript 30 days

## Day07-Array Cardio

##### 使用技術

- js

##### 使用 js 方法

- [some()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some)<br>
  查看 array 當中有至少一個元素有符合判斷式，會回傳 boolean
  ```js
  //這裡使用
  const isAult = people.some((person) => currentYear - person.year >= 19);
  ```

- [every()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/some)<br>
  查看 array 當中所有元素有符合判斷式，會回傳 boolean
  ```js
  //這裡使用
  const allAults = people.every((person) => currentYear - person.year >= 19);
  ```

- [find()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/find)<br>
  找出 array 符合條件的元素
  ```js
  //這裡使用
  const findComment = comments.find((comment) => comment.id === targetID);
  ```

- [findIndex()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)<br>
  找出 array 符合條件的元素的索引
  ```js
  //這裡使用
  const index = comments.findIndex((comment) => comment.id === target);
  ```

