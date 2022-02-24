## Day 16

### title 
滑鼠移動產生 text shaddow

### skill
1. mouse event (mouse move)
2. element 到容器之間的距離(offsetX, offsetY, offsetTop, offsetLeft)

### logic 
1. 滑鼠位置等同光源，陰影的位置就是他的相反方向，所以先計算位移量
2. 觸碰到 h1 的文字時，指向元素的改變會重新指定參考座標，所以才需要判斷如果改變了指定元素，要補回原本座標的位移量

### learn
1. text-shaddow
2. offsetX 和 offsetY 會因為指向的元素(e.target) 不同而重新計算原點座標

### reference
1. [screenX/Y，clientX/Y，offsetX/Y，pageX/Y](https://codertw.com/ios/21835/)