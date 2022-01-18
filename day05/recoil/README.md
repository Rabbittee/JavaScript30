# Javascript 30 Days

## day05 - Flex Panel Gallery

#### 邏輯

##### CSS

1. `.panels` 下 `display: flex` 將底下的 panel 調整成 flex 預設的橫向排列
2. 預設`.panel`樣式，為 flex 並且都一樣寬
3. 當`.panel.open`時，該 panel 的 flex 佔比為 5
4. 設定`.panel`底下子元素的樣式
5. 帶有`.open-active`時，第一與最後一個元素滑入 panel，否則移出畫面

##### JS

1. 用 `querySelectorAll` 選取 `.panel`
2. `forEach 每個 panel` 分別監聽 `click` 與 `transitionend` 事件
3. 用 `toggle` 控制 `panel 被點擊時添加或移除 open`
4. `transitionend` 事件觸發時，用`contins`檢查 panel 是否有`open`這個 className
5. 有的話`增加open-active`,否則執行`移除open-active`

#### 學到了什麼?

##### JS

- [classList.contains](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/contains)檢查 className 是否存在於 classList
- [classList.toggle](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMTokenList/toggle)
- [classList.add](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/add)
- [classList.remove](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/remove)
- [transitionend event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/transitionend_event)

##### CSS

- [translateY()](<https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translateY()>)的值，可用 100%將物件移出畫面外

##### 與其他人不同的地方

- [pointer-events](https://developer.mozilla.org/zh-CN/docs/Web/CSS/pointer-events)
