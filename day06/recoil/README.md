# Javascript 30 Days

## day06 - Flex Panel Gallery

#### 邏輯

1. `debounce` 每次 `keyup 觸發的方法`直到使用者不再輸入
2. 取得搜尋的資料
3. `正規表達式(RegExp)` 過濾資料是否包含搜尋字串或數字
4. 將搜尋到的物件轉換成符合 css 指定的子物件架構
5. 利用`正規表達式(RegExp)`與`字串的replace()`將關鍵字替換成具有`.hl`的標籤。
6. 用`join('')`把陣列物件合併
7. 將結果插入 `ul`

#### 學到了什麼？

- [RegExp](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
<<<<<<< HEAD

- [String.prototype.match()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String/match)

- [replace](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

- [join](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

- [setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)

- [clearTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/clearTimeout)
=======
  正規表達式
- [String.prototype.match()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String/match)
  檢查字串裡是否有符合的表達式規則

- [replace](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
  用正規表達式 group 的方式，替換字串中的單字

- [join](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
  合併字串陣列

- [setTimeout()]()
>>>>>>> ef27896aee35ae0d1eb87739d3aff29edb513979

#### 與其他人的不同

- closure(閉包)

- Promise: 讓整個資料處理流順序更明瞭

- Debounce(去抖動): 使用者每次輸入資料時，會等待到使用者輸入完才觸發函式
  > 以現實的例子來說，就是排隊搭公車的時候，司機在開門後，會待每一個乘客都上車後，最後才會關上門。
