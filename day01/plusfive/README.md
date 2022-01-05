### 初步想法
1. 用 querySelectorAll 選取所有的 div
2. 用 forEach 跑全部的 div(印象中 for loop 不能跑)
3. 在 loop 裡面用事件監聽每一個 div，一有 key event 就發出聲音

### 後來想到的
1. 應該在有 key event 發生時，去找對應的 div ，然後使用相同的 data-key 讓該 audio tag 也能發出聲音？（但這邊的 data-key 等於 keyCode）

### Q
* 怎麼讓 div 和 audio 標籤連動？ A: 後來改直接抓 audio tag
* 怎麼監聽對的按鍵？ A: 監聽 event target，然後抓 keyCode
* 怎麼發出聲音？ A: simply audio.play()
* 怎麼做出跟 sample 一樣的效果（按下去的時候會有 transition 0.7 秒），偷偷在 sample 的網頁按 F12 看到應該也是加上 playing 的效果而已，但是不知道為何 key 的 transition 沒有吃到 QQ

大約流程
```
document.addEventListener('keydown', function(e) {
  allDiv.forEach(function(div) {
    if (e.keyCode === div or audio.dataKey) {
      就讓 audio tag 發出聲音
      audio.play()
    }
  })
})
```