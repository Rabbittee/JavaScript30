## Day 22

### title 
根據滑鼠移動到哪個標籤 highlight 她

### skill
1. insertAdjacentHTML
2. position 

### logic 
1. 插入一個含有 highlight 的 dom 節點，並先隱藏
2. 監聽滑到 a 的標籤的時候把 hightlight 節點打開，並將其寬高都設置為標籤的寬高
3. 在 top 跟 left 的時候還要加上滾軸下拉時的位置
