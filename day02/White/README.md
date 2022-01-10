## 步驟

1. 取得目前時間
2. 取得指針元素，依目前時間更新指針元素角度
3. 美化CSS：秒針及時針樣式，加框線避免針相疊時不清晰，小圓球遮擋指針尾部
4. (小白加菜)顯示電子鐘時間，個位數需補零

## 問題點 & 補充

1. 注意時針的轉動不只考慮「時」，還要考慮「分」，6:00 跟 6:30 一樣是 6時，但時針位置不同
2. 使用 setTimeout() 來更新時間，必須寫成遞回每秒呼叫自己一次
3. 使用 setInterval() 來更新時間，可直接用來連續執行
4. 數字補0的部份，哈奇和卡比建議用 .padStart
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
 實作發現它只吃字串，不吃數字，所以使用時要先轉字串再用 padStart
5. 卡比補充 setInterval() 直接餵函式，不要餵字串，以避免使用 eval。