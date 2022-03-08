/*
 * @Author:Claire Li
 * @Date:2022-03-07 20:47:51
 * @LastEditors:Claire Li
 * @LastEditTime:2022-03-07 21:07:31
 * @Description:
 */
const select = query => document.querySelector(query)

function success(data) {
  select('.speed-value').textContent = data.coords.speed
  select('.arrow').style.transform = `rotate(${data.coords.heading}deg)`
}

function error(err) {
  console.log(err)
}

navigator.geolocation.watchPosition(success, error)