# 放影片啦

- 監聽父元素(控制區域) click 事件判斷是否按下播放鈕、跳過指定時間鈕
- 監聽表單 change 事件，每次觸發都會設定播放速度與音量
- 監聽 video 的 timeupdate 事件，讓影片播放時設定時間條與檢查播放鈕的 icon
- 監聽時間條的 pointerdown、pointerup、pointermove 等事件來控制時間條的長度與影片播放時間點