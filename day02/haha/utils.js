const hourTarget = document.querySelector('.hour-hand');
const minTarget = document.querySelector('.min-hand')
const secTarget = document.querySelector('.second-hand')

// 調整時針、分針、秒針的指針位置
hourTarget.style.transformOrigin = "right"
minTarget.style.transformOrigin = "right"
secTarget.style.transformOrigin = "right"

function getTime() {
    // 獲取時針、分針、秒針時間
    const hour = new Date().getHours() % 12 // 12 小時制
    const min = new Date().getMinutes()
    const sec = new Date().getSeconds()
    // 計算時針、分針、秒針角度，時鐘初始位置為 -90 度，所以要正規化時鐘位置
    const deg = {
        hour: 360 / 12 * hour + 90,
        min: 360 / 60 * min + 90,
        sec: 360 / 60 * sec + 90
    }
    // css style
    hourTarget.style.transform = `rotate(${deg.hour}deg)`
    minTarget.style.transform = `rotate(${deg.min}deg)`
    secTarget.style.transform = `rotate(${deg.sec}deg)`
}

setInterval(getTime, 1000)
