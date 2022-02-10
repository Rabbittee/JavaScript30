## 解題

---

- 變數：賦予值是會影響的

```js
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);
```

```js
let name = 'Wes';
let name2 = name;
console.log(name, name2);
name = 'wesley';
console.log(name, name2);
```

---

- 案索引位置：取代值

```js
// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;

console.log(players, team);
// You might think we can just do something like this:
team[3] = 'Lux';
console.log(players, team);
```

---

- Object Key and value

```js
// with Objects
const person = {
  name: 'Wes Bos',
  age: 80,
};
console.log(typeof person); //object
console.log(person);
```

```js
// and think we make a copy:
const captain = person;
captain.number = 99;
captain.nickName = 'I had a boat';
```

// console 結果.  
console.log(person);
{name: 'Wes Bos', age: 80, number: 99, nickName: 'I had a boat'}

---

- Object 組合過程：參照並更改原本

```js
// 參照並更改原本
// Bad: Will change origin
const dev = Object.assign({}, wes);

// Copy 再更改
// Good: Won't change origin (Full Copy)
const dev2 = JSON.parse(JSON.stringify(wes));
dev2.social.twitter = '@dev2twitter';
console.table(wes);
console.table(dev2);
```
