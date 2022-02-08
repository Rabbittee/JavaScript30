# Javascript 30 Days

## day08 - Fun with HTML5 Canvas

#### 邏輯

1. 選取 canvas
2. 先檢查有沒有捕捉到 canvas node
3. 建立筆刷狀態機及提供更新狀態方法
4. 監聽 `mousedown`、`mouseup`並控制筆刷`isDrawing`狀態
5. 監聽 `mousemove` 並檢查是否 `isDrawing`
6. 更新滑鼠目前位置
7. 若 `isDrawing` 為 true，則執行`draw()`
8. 更新`canvas 實體`狀態
9. 將`滑鼠最後位置`紀錄至`筆刷最後位置`

#### 學到了什麼？

- canvas
  - [getContext](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D) -取得 canvas 實體
  - [beginPath](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/beginPath) -開啟筆刷路徑
  - [moveTo](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/moveTo) -將筆刷移動至指定位置
  - [lineTo](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineTo) -將筆刷軌跡移動至指定位置
  - [closePath](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/closePath) -結束筆刷路徑
  - [stroke](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/stroke) -繪製 stroke
