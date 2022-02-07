# 畫圖囉

共兩個功能

1. 畫筆，可以透過 `input[type="color"]` 改色，畫筆持續在畫的同時，著色範圍會變大，停止畫圖時就會回到初始值。
2. 呱 🐸，畫筆改為把 canvas 畫成透明的區域。

## 相關功能
- 監聽 `mousedown`、`mouseup`、`mouseleave` 來處理畫圖時該觸發的函式
- `onDraggingCanvas` 使用閉包的概念來存下上個畫筆走過的位置，再 `draw` 觸發時把上個位置與當前位置之間畫一條線
- 透過 `globalCompositeOperation` 來改變畫筆模式，達到刮或畫的效果
- `resizeCanvasToDisplaySize` 用來保持 canvas 的解析度的概念