// 個位數時間補0
function pad(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
}

function ShowTime() {
    // 取得目前時分秒
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    // 電子時鐘顯示的時間
    document.getElementById('digit-clock').innerHTML = pad(h) + ":" + pad(m) + ":" + pad(s);

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
setInterval('ShowTime()', 1000);
