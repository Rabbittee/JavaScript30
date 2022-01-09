## Programming Flow

1. 新增 image wrapper，將控制設定改在外層，模糊設定在圖片
2. 在函式 `handleUpdate` 取出屬性名稱`name`，和值`value`
3. 透過 `document.documentElement.style.setProperty` 改變 css `:root` 設定
4. 當 input 在事件 `change`、`mouvemove`時觸發更新