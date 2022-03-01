# day19 - Webcam Fun

## 邏輯
    1. 檢查瀏覽器是否有支援API
    2. 檢查是否有抓到設備
    3. setInterval設定畫面更新速率
    4. 處理setInterval觸發時畫面效果
    5. 將畫面繪製到canvas上


## 學到了什麼？
- [ImageData](https://developer.mozilla.org/en-US/docs/Web/API/ImageData/ImageData)
    * [data](https://developer.mozilla.org/en-US/docs/Web/API/ImageData/data)
    ```js
        const imageData = new ImageData(100, 100);//會是100px * 100px正方形圖片
        imageData.data //Uint8ClampedArray[40000]
        //長度 40000筆 = [R, G, B, A] * 100px * 100px.
        
    ```
- [mediaDevices](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices)
    * [getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)
- canvas
    * [toDataURL](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL)
    * [putImageData](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/putImageData)
- node
    * [insertBefore](https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore)