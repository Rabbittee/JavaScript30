#### 實作流程
1. 選取滑鼠會滑過的範圍
2. 拿到範圍的寬高
3. 計算滑鼠滑到 h1 時的實際寬高（讓寬高不被 h1 影響）
4. 計算要讓動畫滑多遠

#### property（待研究）
1. offsetLeft
2. offsetTop

#### TS 練習
<h5>謝謝阿法跟鉛筆的香扣讓我大大的參考 TS 的寫法</h5>
<h5>大感謝～～</h5>

1. HTMLElement | null：閱讀文件後的理解是在閱讀文件後的理解是在 pre-runtime 的時候不一定會找到這個 element，所以要給他一個 null
2. void: 可以用 void 表示沒有任何返回值的函式
3. as HTMLElement & <HTMLElement> 差別？ A: 只是兩種不同的 Type Assertion 方式
4. 試著寫 if(this !== target) 判斷式時出現 This condition will always return 'true' since the types 'typeof globalThis' and 'HTMLElement' have no overlap. 錯誤，看錯誤訊息覺得是因為他們的 type 沒有重疊，所以永遠都會 return true，也就沒有寫該判斷式的必要了