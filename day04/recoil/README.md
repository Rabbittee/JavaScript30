# Javascript 30 Days

## day04 - Array Cardio Day 1

#### Logic

```js
// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const borns = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);
console.table(borns);
```

```js
// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const names = inventors.map((inventor) => `${inventor.first} ${inventor.last}`);
console.log("inventors first and last names", names);
```

```js
// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const birthList = inventors.sort((a, b) => a.year - b.year);
console.table("inventors by birthdate", birthList);
```

```js
// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const allTogetherYears = inventors.reduce(
  (acc, val) => acc + (val.passed - val.year),
  0
);
console.table("live all together", allTogetherYears);
```

```js
// 5. Sort the inventors by years lived
const livedList = inventors.sort(
  (a, b) => b.passed - b.year - (a.passed - a.year)
);
console.table("years lived", livedList);
```

```js
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
```

```js
// 7. sort Exercise
// Sort the people alphabetically by last name
function getLastName(name) {
  const lastName = name.split(", ")[0];
  return lastName.toUpperCase();
}
const sortAlphabet = people.sort((a, b) => {
  return getLastName(a) > getLastName(b) ? 1 : -1;
});
console.log(sortAlphabet);
```

```js
// 8. Reduce Exercise
// Sum up the instances of each of these
const counter = data.reduce((acc, val) => {
  if (acc.hasOwnProperty(val)) {
    acc[val]++;
    return acc;
  }
  return { [val]: 1, ...acc };
}, {});
console.log(counter);
```

##### Stack

- [filter](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [map](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [sort](https://developer.mozilla.org/zh-TW/search?q=sort)
- [reduce](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
- [split](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split)
