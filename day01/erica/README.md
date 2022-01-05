## Programming Flow

1. 因應 `KeyboardEvent.keyCode` 語法已被淘汰，改用 `KeyboardEvent.key` 來偵測鍵盤對應字母
2. `KeyboardEvent.key` 會偵測到標點符號造成錯誤，因此先轉換成 ASCII 並排除標點符號
3. 過濾標點符號後，針對沒有 `data-key` 屬性的元件進行排除
4. 處理非同步音訊播放
5. 針對鍵盤監聽事件 啟動/停止 播放

<br>

## Media Promise

為了要達成 `keyup` 時停止音訊的目的，先建立一個 `stopAudio` 函式，此時如果直接在 `keydown` 和 `keyup` 切換音訊動作，會造成以下錯誤：
```
Uncaught (in promise) DOMException: The play() request was interrupted by a call to pause().
```

`HTMLMediaElement` 在執行 `play()` 的時候會回傳一個 Promise，而 `stopAudio` 函式中的 `audio.pause()` 不只會暫停音訊，同時也會重置音訊。
因此如果沒有處理 Promise，就會造成音訊中斷的錯誤。

#### 解法：

1. 先宣告 `audioPromise = audio.play()`
2. 處理 `audioPromise`，並在中斷時使用 `catch` 停止執行


```
const audioPromise = audio.play()
if (audioPromise !== undefined) {
    audioPromise.then(() => {
        audio.play()
    })
    .catch(() => {
        stopAudio()
    })
}
```

<br>

* [MDN：HTMLMediaElement.play()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play)
* [HTMLMediaElement.play() Returns a Promise](https://developers.google.com/web/updates/2016/03/play-returns-promise)

