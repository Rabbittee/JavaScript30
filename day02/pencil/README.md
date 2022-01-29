1. 使用 setInterval 每秒觸發 getCurrentTime 取得現在時、分、秒
3. 取得對應指針 DOM 元素
4. 每秒鐘轉動的角度（deg/sec）
   - 時：(360 / 12 / 5 / 12 / 60)deg / 1sec
   - 分：(360 / 12 / 5 / 60)deg / 1sec
   - 秒：(360 / 12 / 5)deg / 1sec