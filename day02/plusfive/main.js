// 抓取時分秒針
const hourHand = document.querySelector('.hour-hand')
const minuteHand = document.querySelector('.min-hand')
const secondHand = document.querySelector('.second-hand')

// 更新時間
function updateTime () {
  const day = new Date()
  const hour = day.getHours()
  const minute = day.getMinutes()
  const second = day.getSeconds()

  const hour_deg = (360/12) * hour + 90 + minute * (30/60)
  const min_deg = (360/60) * minute + 90 + second * (6/60)
  const second_deg = (360/60) * second + 90
  hourHand.style.transform = `rotate(${hour_deg}deg)`
  minuteHand.style.transform = `rotate(${min_deg}deg)`
  secondHand.style.transform = `rotate(${second_deg}deg)`
}

// 用 setInterval 每秒更新一次
setInterval(updateTime, 1000)
// updateTime()