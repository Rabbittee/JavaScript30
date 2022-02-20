# Todo list (假的!

1. localStorage
2. 事件代理
3. 使用 event 裡面的 timestamp 來產生一組 id 供元素使用
    - `event.timeStamp.toString(36).replace('.', '') + Math.random().toString(36).substring(2);`

## 思路

1. 監聽兩個 Form 的 `submit`、`change` 事件來觸發 `onSubmitForm`、`onChangeTodoItems`
2. `handleTodoItems` 回傳一些操作 `todoItems` 陣列的方法
   1. 每次更新 todoItems 陣列後都使用該陣列來創造新的 todo list 的 DOM 元素來替換掉舊的
   2. 前一點的更新之後，把 `todoItems` 儲存到 LocalStorage
   3. 第一次進入頁面取出 LocalStorage 的資料