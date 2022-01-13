### Target

- 拖曳滑動條的同時，動態改變圖片樣式
- 樣式包含框線粗細、模糊化、色彩變換

### Flow

- 取得 spacing、blur、base color 滑動條數值
- 運用 dom.style 的方法改變圖片樣式
  包含 .style.border、.style.filter、.borderColor、.color
- 運用 addEventListener 監聽 input 狀態
  以實現拖動過程同步樣式呈現
- 增加進入頁面帶入預設值效果

### Bottle-neck

- 原猜測成品使用 margin ，不過找不到如何設定間距背景，因此改使用 border 實現預期效果

### Other

- no content
