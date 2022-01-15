# Javascript 30 Days

## day04 - Array Cardio Day 1

#### 邏輯

1. Filter the list of inventors for those who were born in the 1500's

   把發明者的出生年份拿出來過濾，大於等於 1500 年代並且小於 1600 年代

---

2. Give us an array of the inventors first and last names

   將發明者列舉出來，取得 **first** 與 **last** 並且用樣板字串組合

---

3. Sort the inventors by birthdate, oldest to youngest

   將 **a.year** 減去 **b.year** 做升幂排序

---

4. How many years did all the inventors live all together?

   先把 **reduce** 初始值設為 **0**

   把每個發明者的 **過逝年份 - 出生年份** 取得年齡，再加上每次累加器回來的值，返回的就是總年齡

   > (acc, val) => acc + (val.passed - val.year)

---

5. Sort the inventors by years lived

   先取得 b 的年齡 **b.passed - b.year**,在取得 a 的年齡 **a.passed - a.year**

   最後將 **b 的年齡 - a 的年齡**

---

6. create a list of Boulevards in Paris that contain 'de' anywhere in the name

   > skip

---

7. sort Exercise

   用 **split** 分離出 last name 與 first name

   用 **toUpperCase** 統一將姓改成大寫，方便排序字串開頭

   比較 a 開頭字母順序是否大於 b

---

8. Reduce Exercise

   把 **reduce** 初始值設為 {}

   檢查累加氣器是否存在下一個進來的 key 值

   若 key 不存在則返回 **{ [val]: 1, ...acc }** 建立新的 key:value，進入下一次迴圈

   若存在則 **acc[val]++** 進行累加，最後返回累加器的值

##### 學到了什麼？

- [filter](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [map](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [sort](https://developer.mozilla.org/zh-TW/search?q=sort)
- [reduce](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
- [split](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split)