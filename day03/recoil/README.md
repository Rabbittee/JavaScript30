# Javascript 30 Days

## day03 - CSS Variables

#### 邏輯

1. 選取 .controls 下的 input
2. forEach input 的 value 去初始化 documentElement.style 的 css 變數
3. 監聽每個 input 的 change 與 mousemove 事件
4. 每次觸發事件就設定 :root 的 css 變數


#### 與其他人的不同

1. 用閉包的特性在不同函式間處理統一處理documentElement.style
2. 用 Optional chaining (?.) 檢查 key
3. Nullish coalescing operator (??) 當 Optional chaining 找不到該 key 時，補上預設的值

#### 學到了什麼?

1. 在不同的 function 間出現重複的行為，思考哪種方式抽換
2. 監聽事件的觸發時機
3. [Optional chaining (?.)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) 與 [Nullish coalescing operator (??)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator) 使用時機
4. [:root](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:root) 根目錄選取器的使用以及[css變數](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)宣告方式
5. [var()](https://developer.mozilla.org/en-US/docs/Web/CSS/var()) 方法的引用