### 初步想法
1. 建立三個變數裝時、分、秒的訊息
2. 三個變數只要有變動的話，`hour-hand`、`min-hand`、`second-hand`就會往前走（難怪要算時針、分針跟秒針的角度）
3. 時針一格走 30 度、分針跟秒針一格是 6 度


### Q
1. 要如何一直偵測三個物件的變化？用 `setTimeout` 或是 `setInterval` 每隔一秒就打 `updateTime` 的 function? A: 要用 `setInterval`，因為這個 function 是會在設定的間隔時間內“一直”循環
2. 要如何讓時針分針秒針旋轉？A: css [transform:rotate()](https://www.w3schools.com/cssref/css3_pr_transform.asp)
3. 要如何控制 rotate 的角度讓他動態的改變？A: .style.transform
4. 在可以轉之後，如何讓時分秒針以時鐘中心為基準去轉？A: transform-origin
5. 要如何搭配「時」、「分」、「秒」，做出正確的指針變化？A: 要讓時、分針隨著時間在過做出相對應的角度變化，比如說，時針每一小時走 30 度，所以換句話說就是 30 度要平均分散在 60 分鐘內走完，所以時針每分鐘就是走 30/60 度，以此類推，分針每一分走 6 度，6 度要平均分散在 60 秒內走完，所以分針每秒鐘就是走 6/60 度
6. 抓到目前現在的時間時，如何讓時分秒針先站在正確的位置？A: 感覺要讓基準點先回到 12:00，然後去抓出對應的角度就可以了(以題目給的 position 和 top:50% 為例，基準點要設定 90 度(這樣不行，因為抓到的現在的時先也會從題目給的角度出發，顯示出來的並非正確時間，所以在設定角度時要把 90 度加回來))


### 簡略步驟
```
function updateTime () {
  const hour = new Date()
  const min = new Date()
  const second = new Date()

  做 HTML 的變化：
  1. 用 position 去更改時分秒針位置
  2. 轉了一圈之後要歸零重算？
  // 結果以上皆非
}

setInterval(updateTime, 1000)
```