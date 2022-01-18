## Programming Flow

1. 整理資料，將所有 data 拆出來集中在 `data.js`，並 import 到 `script.js`
2. 每一題分別用 IIFE 包起來，並用 `print()` 函式將結果 print 到 console 和畫面上


## Solutions

1. 使用 `filter()` 取出在 1500's 出生的發明家
* 將 `inventor.year` 轉成字串
* `slice(0, 2)` 取出年份首 2 個字元
* `match(15)` 回傳符合 15 

<br>

2. 使用 `map()` 回傳一個包含姓名的陣列
* 使用 Template literals 整理字串

<br>

3. 使用 `sort()` 依照年齡由大 → 小，(生日由小 → 大) 排序
4. 使用 `reduce()` 計算發明家們總共活了多少年
5. 根據發明家的年齡排序
* 先用 `reduce()` 整理出需要的資料：姓名、生日、年齡
* 根據年齡用 `sort()` 排序

<br>

7. 使用 `sort()` 針對 people 陣列中的 last name 英文字進行排序
* 先用 `split(', ')[1]` 擷取字串
* 並用 `toLowerCase()` 統一轉換成小寫
* 使用三元運算子進行過濾，回傳 a > b 為 true 的值進行排序

<br>

8. 使用 `reduce()` 計算 data 陣列中每一個值的重複次數
* 當 `acc[curr]` 為 undefined 時， `acc[curr] = 0` 為第一個值
* 之後遇到同樣的值就 ++
* 最後再回傳 acc 結果 