# 給我選！

1. 儲存兩個狀態
   1. 前一個打勾的 input 索引
   2. 目前是否按著 shift
2. 監聽 keydown、keyup 事件來改變是否按 shift
3. 監聽表單 change 事件
   1. 如果有按著 shift & 有前一個打勾的索引則觸發多選表單
   2. 更新目前打勾索引