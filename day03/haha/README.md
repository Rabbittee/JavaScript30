## Day 3

### title 
利用 js 操控 css 變量

### skill
1. querySelectorAll() 選擇器的應用
2. css 變量的認識
3. data-* attribute 的應用
4. dom event

### logic 
1. 取得所有的 input dom node
2. 監聽畫面發生變化時的 dom 元素，修改 css 變量

### reference
1. [JS 操控 css 變量的方式](https://stackoverflow.com/questions/41370741/how-do-i-edit-a-css-variable-using-js/47172679)
2. [data-* attribute 屬性](https://pjchender.blogspot.com/2017/01/html-5-data-attribute.html)
3. [dom event](https://ithelp.ithome.com.tw/articles/10202307)

### learn
1. 深入了解到 data-* attribte 這個屬性，以及利用 js 取得時更多種方式

    ```javascript
    // html tag 會被吃掉，所以標籤前面都會加上 % 
    <%template>
            <%div id="slider" data-type="slideShow"></%div>
    </%template>
    <%script>
            const slider = document.querySelectorAll('#slider')
            console.log(slider.dataset.type) // slideShow
            console.log(slider[data-type]) // slideShow
            console.log(slider.dataset) // { type: slideShow }
    </%script>
    
    
    ```
2. 認識 css 變量
