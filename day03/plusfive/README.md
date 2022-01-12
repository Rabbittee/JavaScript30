### 初步想法
1. 用 `.style.setProperty` 動態設定 css 變數
2. 監聽三個 `input` 去拿值

### 沒注意到的地方
1. 在 :root 定義變數時不用用引號....（被痣己蠢死）
2. `document.documentElement` 會 return document 的根元素，比如說：HTML 文件的 `<html>`