## Day 1

### title 
按下對應鍵盤，可以有聲音。

### skill
1. addEventListener 事件監聽 ( keydown, transitionend )
2. querySelector()、querySelectorAll() 選擇器的應用
3. data-* attribute 的屬性值應用
4. audio 事件
5. classList 事件的使用
6. charCodeAt ( keyCode 已被淘汰 )

### logic 
1. 全域監聽鍵盤按下的事件
2. 根據按下的 KeyboardEvent.key 轉換成大寫英文字母去對照 ascii 碼，就會是 KeyboardEvent.keyCode ( 因為 event keyCode 已遭棄用 )
3. 根據按下的按鍵去選擇 div、audio Dom，如果找不到就是不需要發出聲音的按鍵
4. 若是需要播放聲音按鍵，播放對應的聲音，並且加入 **playing** class
5. 監聽 **playing** 效果結束時，遍歷 dom 元素將含有 **playing** 的 class 移除

### reference
1. [data-* attribute 的屬性值應用](https://pjchender.dev/html/html-data-attribute/)
2. [audio 事件](http://www.eion.com.tw/Blogger/?Pid=1038)
3. [classList](https://teagan-hsu.coderbridge.io/2020/12/29/how-to-set-css-styles-using-javascript/)
4. [ascii碼](http://kevin.hwai.edu.tw/~kevin/material/JAVA/Sample2016/ASCII.htm)
