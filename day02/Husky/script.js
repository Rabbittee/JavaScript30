const SHIFT = 90
const CIRCLE = 360

function getTimeAngle([hourCurrentCircle, minCurrentCircle, secCurrentCircle]) {
    const now = new Date()

    const sec = SHIFT + secCurrentCircle * CIRCLE + now.getSeconds() * 6
    const min = SHIFT + minCurrentCircle * CIRCLE + now.getMinutes() * 6 + now.getSeconds() / 10
    const hour = SHIFT + hourCurrentCircle * CIRCLE + (now.getHours() % 12) * 30 + now.getMinutes() / 2

    return {
        sec,
        min,
        hour,
        carry: {
            sec: now.getSeconds() === 59,
            min: now.getMinutes() === 59 && now.getSeconds() === 59,
            hour: (now.getHours() % 12) === 11 && now.getMinutes() === 59 && now.getSeconds() === 59
        }
    }
}

function setHand() {
    const hourHand = document.querySelector('.hour-hand')
    const minHand = document.querySelector('.min-hand')
    const secondHand = document.querySelector('.second-hand')

    const angle = getTimeAngle([
        Number(hourHand.dataset.circle),
        Number(minHand.dataset.circle),
        Number(secondHand.dataset.circle)
    ])

    secondHand.style.transform = `rotate(${angle.sec}deg)`;
    minHand.style.transform = `rotate(${angle.min}deg)`;
    hourHand.style.transform = `rotate(${angle.hour}deg)`;

    if (angle.carry.sec) secondHand.dataset.circle = Number(secondHand.dataset.circle) + 1
    if (angle.carry.min) minHand.dataset.circle = Number(minHand.dataset.circle) + 1
    if (angle.carry.hour) hourHand.dataset.circle = Number(hourHand.dataset.circle) + 1
}

setInterval(setHand, 1000)
setHand()