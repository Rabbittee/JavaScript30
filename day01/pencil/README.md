1. 在 window 加上一個 keyDown 的事件監聽，好取得按鍵的 keyCode
2. 用 keyCode 在 querySelectorAll 進行選取，若取不到值，則 early return 中斷
3. 將取得的 nodeList 分為畫面上顯示的 DOMElement 以及引入音檔的 audioDOM
4. 在 DOMElement 的 class list 上加上 playing class 觸發動畫，並透過 setTimeOut 將觸發後的樣式變更取消
5. 用 play() 來播放對應音檔

此次遇到的問題
querySelector 的使用...
一開始是把全部的 keys key 都取出來，然後跑 forEach 去判斷 data-key 跟按下去的按鍵有沒有相同，有相同的話再做後續處理。
多虧 querySelectorAll(`[data-key="${key}"`) 的用法，讓我可以不使用陣列方式去判斷