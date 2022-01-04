# 打鼓嗎? 不打

## 大綱

- 監聽 `keydown` & `keyup`
- 用 [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) 紀錄正被按著的按鈕 (keycode)，因為要用來避免按著按紐時重複撥放音訊 (監聽的 `keydown` 在按鈕壓著時會重複執行)
- audio play 之前先把 `currentTime` 設定為 0，不然下次播放會從上次停止撥放的地方播放
- 使用 IIFE，為甚麼呢? 這樣才不會讓變數汙染其他地方，[不信的話點進來開 F12 來看看](https://rabbittee.github.io/JavaScript30/day01/kevin/)

## 流程

1. `keydown` 時判斷是不是按著，
   - 是按著
     - 啥都不做
   - 不是按著
     - 撥放
     - 把 class (`.playing`) 綁到該對應的按鈕上
     - 紀錄現在這個按鈕被按著
2. `keyup`
   - 把現在這個按紐從記錄中移除
   - 把 class (`.playing`) 從對應的按鈕上移除
