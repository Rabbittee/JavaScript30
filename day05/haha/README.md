## Day 5

### title 
點擊面板後針對進場跟離場處理不同的轉場效果。

### skill
1. dom event
2. querySelectorAll() 選擇器的應用
3. classList 的操作

### logic 
1. 監聽面板按下的事件，用 classList.toggle 切換 open 不同類別
2. 監聽動畫結束時，再根據 class 裡面是否包含 open 去新增或移除 open-active class

### learn
1. 動畫出現的先後順序
2. classList.toggle 判斷元素是否包含類別，有則移除，沒有就新增
3. addEventListener 可以有多個監聽事件，但是必須拆開來運作