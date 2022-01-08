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

    const hourDeg = (hour * scale * 5) + Math.floor(min / 60 * scale)
    hourHand.style.transform = `${translate} rotate(${hourDeg}deg)`

    const minDeg = (min * scale) + Math.floor(sec / 60 * scale)
    minHand.style.transform = `${translate} rotate(${minDeg}deg)`

    let secDeg = sec * scale
    secHand.style.transform = `${translate} rotate(${secDeg}deg)`

}


setInterval(setClockTime, 1000);
setClockTime();