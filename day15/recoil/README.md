# Javascript 30 Days

## day15 - LocalStorage

### 不同之處
- 用閉包封裝localStorage,省去重複輸入API第一個參數
```js
function storage(key) {
  return {
    save(payload) {
      localStorage.setItem(key, JSON.stringify(payload));
    },
    load() {
      return JSON.parse(localStorage.getItem(key));
    },
  };
}
```
如何使用
```js
const ordersStorage = storage('orders');

ordersStorage.save([value]);
ordersStorage.load();
```
- DOMContentLoaded事件

- Promise處理data flow

### 學到什麼？

- [DOMContentLoaded](https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event)