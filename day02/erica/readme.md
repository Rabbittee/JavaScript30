# Programming Flow

## Style

1. 重新設計樣式，更換背景圖片
2. 在 body 加上 `backdrop-filter: blur(3px);`，讓背景呈現模糊效果，凸顯時鐘主題
3. 利用 `box-shadow` 疊加製作霓虹燈效果
4. 加上 `transform-origin: center bottom;` 讓軸心固定在時鐘的正中心

## JavaScript

1. 用 `new Date()` 取出當下時間
2. hour 取出後是 24 小時制，所以除以 12 轉換成 12 小時制，取出餘數就是當下時刻
3. 宣告 scale 計算每一刻度的角度為 360° / 12 (小時) / 5 (分)
4. 分別計算每種指針的角度，並替換到 `style.transform`


