## Programming Flow

1. 新增 image wrapper，將控制設定改在外層，模糊設定在圖片
2. 在函式 `handleUpdate` 取出屬性名稱`name`，和值`value`
3. 透過 `document.documentElement.style.setProperty` 改變 css `:root` 設定
4. 當 input 更新時在事件 `input` 觸發更新

### Input event 

* input 事件會在每次 value 值變動時被觸發
* change 則是在提交後才會觸發事件

> Note: The input event is fired every time the value of the element changes. This is unlike the change event, which only fires when the value is committed, such as by pressing the enter key, selecting a value from a list of options, and the like.
