function showTime() {
    // 取得目前時分秒
    let now = new Date();
    let h = now.getHours().toString().padStart(2, '0');
    let m = now.getMinutes().toString().padStart(2, '0');
    let s = now.getSeconds().toString().padStart(2, '0');

    // 電子時鐘顯示的時間
    document.getElementById('digit-clock').innerHTML = h + ":" + m + ":" + s;

    // 取得指針元素
    let hHand = document.querySelector('.hour-hand');
    let mHand = document.querySelector('.min-hand');
    let sHand = document.querySelector('.second-hand');

    // 計算指針角度 原預設為 -90度 需加回角度時間才正確
    let hDeg = (h / 12) * 360 + (m / 60) * 30 + 90;
    let mDeg = (m / 60) * 360 + (s / 60) * 6 + 90;
    let sDeg = s * 6 + 90;

    // 設定指針角度
    hHand.style.transform = `rotate(${hDeg}deg)`;
    mHand.style.transform = `rotate(${mDeg}deg)`;
    sHand.style.transform = `rotate(${sDeg}deg)`;
}

// 每秒執行一次 連續執行
setInterval(function(){ showTime() }, 1000);
