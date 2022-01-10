function getTimeAngle() {
    const now = new Date()
    const base = 90

    const sec = base + now.getSeconds() * 6
    const min = base + now.getMinutes() * 6 + now.getSeconds() / 10
    const hour = base + (now.getHours() % 12) * 30 + now.getMinutes() / 2

    return {
        sec,
        min,
        hour
    }
}

function setHand() {
    const angle = getTimeAngle()
    const hourHand = document.querySelector('.hour-hand')
    const minHand = document.querySelector('.min-hand')
    const secondHand = document.querySelector('.second-hand')

    secondHand.style.transform = `rotate(${angle.sec}deg)`;
    minHand.style.transform = `rotate(${angle.min}deg)`;
    hourHand.style.transform = `rotate(${angle.hour}deg)`;
}

setInterval(setHand, 1000)
setHand()