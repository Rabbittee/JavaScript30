const getDom = (dom) => document.querySelector(dom)
const hourHand = getDom('.hour-hand')
const minHand = getDom('.min-hand')
const secHand = getDom('.second-hand')

function setClockTime() {
    const now = new Date()
    const hour = Math.floor(now.getHours() % 12)
    const min = now.getMinutes()
    const sec = now.getSeconds()

    const scale = 360 / 12 / 5
    const translate = `translate(-50%, -100%)`

    // 時針：(時 * 刻度 * 5(小格)) + (分 / 60(小格) * 刻度)
    const hourDeg = (hour * scale * 5) + Math.floor(min / 60 * scale)
    hourHand.style.transform = `${translate} rotate(${hourDeg}deg)`

    // 分針：(分 * 刻度) + (秒 / 60(小格) * 刻度)
    const minDeg = (min * scale) + Math.floor(sec / 60 * scale)
    minHand.style.transform = `${translate} rotate(${minDeg}deg)`

    // 秒針：秒 * 刻度
    const secDeg = sec * scale
    secHand.style.transform = `${translate} rotate(${secDeg}deg)`

}

setInterval(setClockTime, 1000);
setClockTime();