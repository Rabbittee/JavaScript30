# day18 - Adding Up Times with Reduce

## 邏輯
    1. 取得所有的li
    2. 將li的data-time值取出來
    3. 用split分割`分`與`秒`轉換成數字
    4. 將時間轉換成秒鐘
    5. reduce累加全部video時間長度
    6. 將總時間秒數轉換成時分秒