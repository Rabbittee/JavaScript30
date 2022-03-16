/*
 * @Author:Claire Li
 * @Date:2022-03-14 22:24:10
 * @LastEditors:Claire Li
 * @LastEditTime:2022-03-16 22:05:49
 * @Description:
 */
// 選取要拖曳的 items
const slider = document.querySelector('.items')
// 設定是不是正在被 click 的 flag
let isDown = false
// 設定起始的 X 的位置
let startX
let scrollLeft

function endAction() {
  isDown = false
  slider.classList.remove('active')
}

slider.addEventListener('mousedown', (e) => {
  isDown = true
  slider.classList.add('active')
  // 起始的 X 的位置是從頁面上開始算的 X 減掉 slider 到 page 的距離去算出實際的 X
  startX = e.pageX - slider.offsetLeft
  // 拿到往左邊滑了多少
  scrollLeft = slider.scrollLeft
})

// 游標 unclick 跟離開 slider 之後都要失去作用
slider.addEventListener('mouseleave', endAction)
slider.addEventListener('mouseup', endAction)

slider.addEventListener('mousemove', (e) => {
  // 如果不是正在“按住” slider 就 return 掉
  if (!isDown) return
  // 拿到新的 x 位置
  const x = e.pageX - slider.offsetLeft
  // 看總共滑了多少
  const walk = x - startX
  // 如果這樣寫每一次重新 drag 的時候都會從頭來
  // slider.scrollLeft = walk
  slider.scrollLeft = scrollLeft - walk
})