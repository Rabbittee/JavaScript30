## Day 11

### title 
客製化 video player

### skill
1. video event 的各類操作

### logic 
1. 點擊影片時，可以切換播放暫停的 icon，初始化影片的長度
2. 點擊音量 icon 時，可以切換靜音或者播放音量的 icon，靜音時，音量的 bar 長度歸 0，切回播放音量時，音量的 bar 長度回歸等比例的長度
3. 任意點擊影片進度條時，計算點擊位置佔影片長度的比例，設置進度條的長度，並且將影片播放至當前點擊位置
4. 根據 video api "timeupdate"，不斷更新當前影片播放的時間
5. 根據 video api "requestFullscreen"，選擇全螢幕播放
6. 影片的前進後退秒數，則是計算當前時間加上或減掉某個比例
7. 調整影片播放速度，透過 select 選擇影片播放的速度，改變播放的速度

### learn
1. video event
