# Javascript 30 days

## Day03-Scoped CSS Variables and JS

##### 使用技術

- pure js

##### 使用 js 方法

- [.filter](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)<br>
  把 array 裏只留下符合自己條件的 item

  ```js
  //這裡使用 只有 year >= 1500 以及 < 2000才會留下

  array.filter(({ year }) => year >= 1500 && year < 2000);
  ```

- [.map](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/map)<br>
  針對原本陣列的每個 item 作處理然後回傳新結果集合成新的陣列。

  ```js
  //只回傳每個人的first 跟 last 物件屬性集合成新的陣列

  inventors.map(({ first, last }) => {
    return { first, last };
  });
  ```

- [.sort](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)<br>
  陣列依照給予的條件做排列集合成新的陣列。

  ```js
  //依照 year 的大小做排列

  inventors.sort((a, b) => {
    return a.year - b.year;
  });
  ```

- [.reduce](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)<br>
  對於陣列每個 item 依照給予的回乎函示做累加處理。

  ```js
  //每個人的歲數累加起來

  inventors.reduce((total, { year, passed }) => {
    return total + (passed - year);
  }, 0);
  ```

- [.split](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split)<br>
  將字串依照給予的條件做切割。

  ```js
  //字串在遇到逗號空白做分割

  name.split(", ");
  ```
