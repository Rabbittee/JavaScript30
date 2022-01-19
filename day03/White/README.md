# 步驟

1. 初始化設定CSS變數：Spacing用padding，Blur用filter，Base Color用background-color
2. 當input值改變(onChange)時執行函式
3. 將新的input值代入CSS變數中

## 補充

1. 標題字的(.hl)記得設與Base Color同變數
2. 取得input data屬性時，要使用 .dataset
3. 為了方便取用及修改，CSS變數命名特意與id相同
4. 變更CSS變數時，使用 document.documentElement.style.setProperty()
