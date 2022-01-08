const getDom = (dom) => document.querySelector(dom)
const hourHand = getDom('.hour-hand')
const minHand = getDom('.min-hand')
const secHand = getDom('.second-hand')

/**
 * 時針：(時 * 刻度 * 5(小格)) + (分 / 60(小格) * 刻度)
 * 分針：(分 * 刻度) + (秒 / 60(小格) * 刻度)
 * 秒針：秒 * 刻度
 */
function setClockTime() {
    const now = new Date()
    const hour = Math.floor(now.getHours() % 12)
    const min = now.getMinutes()
    const sec = now.getSeconds()

    changeTranform(hourHand, getRotateDeg(hour * 5, min))
    changeTranform(minHand, getRotateDeg(min, sec))
    changeTranform(secHand, getRotateDeg(sec))

}

function getRotateDeg(curr, next) {
    const unit = 360 / 12 / 5
    if(next) return (curr * unit) + Math.floor(next / 60 * unit)
    else return curr * unit
}

function changeTranform(target, degrees) {
    const translate = `translate(-50%, -100%)`
    return target.style.transform = `${translate} rotate(${degrees}deg)`
}

setClockTime()
setInterval(setClockTime, 1000)

