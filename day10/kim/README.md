## 解題

---

看完影片還是沒不能理解，部分程式碼為什麼這樣撰寫，所以查了相關資料

1. 第一個疑問.  
   我以為 `lastChecked` 是一個 method.  
   so I search by Google "JS lastChecked"

2. 第二個疑問.  
   `inBetween = !inBetween;`

---

And I found the result.

[0. Ref 4 顆星 for me (到～建立新陣列儲存要打勾的元素)](https://ithelp.ithome.com.tw/articles/10205095)  
[1. Ref](https://stevenjhu.com/2020/03/21/js%E4%BD%9C%E5%93%81js30%E7%B3%BB%E5%88%9710-hold-shift-and-check-checkboxes-%E9%81%B8%E5%96%AE%E5%A4%9A%E9%87%8D%E9%81%B8%E5%8F%96%E5%8A%9F%E8%83%BD/)  
[2. Ref](https://ithelp.ithome.com.tw/articles/10204989)  
[3. Ref](https://guahsu.io/2017/07/JavaScript30-10-Hold-Shift-and-Check-Checkboxes/)  
[4. Ref](https://shunnien.github.io/2017/12/27/Javascript30days-10/)

---

And what I know

> By 0.  
> 追蹤最後打勾的元素
> 接著建立新變數來儲存最後打勾的 checkbox  
> 使用 let 而不是 const 是因為之後值會變動
> `lastChecked = checkBoxes[index];`
> 然後為每個 checkbox 設定監聽事件，並把被點取的 checkbox 存入 lastChecked 變數
>
> By 1.  
> `if ( ! lastChecked) lastChecked = this ;`  
>  //確定選中 or 取消選中
>
> By 2.  
> 就會轉變 inBetween 變成 true

    之後使用

    if (inBetween) {
        checkbox.checked = true;
    }
    讓之後的input都變成checked
    再次遇到this、lastChecked時
    再次改動inBetween變成false
    之後的input都不會被checked

> By 3.  
> 並設置一個變數 let lastChecked;作為稍後勾選位置的紀錄使用。
>
> By 4.  
> 加入 isBetween 變數，用來記錄是否符合上述的條件

---

以上，先記錄來日有緣再重寫
好難啊啊啊啊~~~
