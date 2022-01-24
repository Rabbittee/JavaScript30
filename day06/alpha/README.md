# Javascript 30 days

## Day06-Type Ahead

##### 使用技術

- javascript
- scss

##### 使用 js 新的方法

- [async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
  用於需要非同步處理的行為。

  - [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch)
    用於串接 api 行為常見的有 get/post/delete，預設為 get，因為需要等待串接 api 結果故常搭配非同步 function 使用

    ```js
    export async function fetchData() {
      const res = await fetch(endpoint);
      const data = res.json();
      return data;
    }
    ```

- [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
  正則表達式。

  ```js
  //g為 globel 文本 i為不分大小寫
  const reg = new RegExp(input, 'gi');
  ```
