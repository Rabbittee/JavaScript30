/*
 * @Author:Claire Li
 * @Date:2022-02-07 13:20:01
 * @LastEditors:Claire Li
 * @LastEditTime:2022-02-08 11:21:36
 * @Description:
 */
const canvas = document.querySelector('#draw')
const lineWidthInput = document.querySelector('#lineWidth')
const eraser = document.querySelector('#eraser')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
ctx.strokeStyle = '#fb923c'
ctx.lineCap = 'round'
ctx.lineJoin = 'round'
ctx.lineWidth = Number(lineWidthInput.value)

let isDrawing = false
let isErasing = false
let lastX = 0
let lastY = 0
let hue = 0

function draw (e) {
  if (!isDrawing) return

  if (isErasing) ctx.strokeStyle = '#3d4451'
  else ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`

  ctx.beginPath()
  ctx.moveTo(lastX, lastY)
  ctx.lineTo(e.offsetX, e.offsetY)
  ctx.stroke()
  // error: main.js:31 Uncaught TypeError: Cannot set properties of undefined (setting '0')
  // [lastX, lastY] = [e.offsetX, e.offsetY]

  lastX = e.offsetX
  lastY = e.offsetY
  hue++
}

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true
  lastX = e.offsetX
  lastY = e.offsetY
  // 用這方法賦值得 click 很多次才會有線，之後再來找答案 XD
  // [lastX, lastY] = [e.offsetX, e.offsetY]
})
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)
lineWidthInput.addEventListener('input', (e) => {ctx.lineWidth = Number(e.target.value)})
eraser.addEventListener('click', (e) => {
  e.target.classList.toggle('bg-white')
  isErasing = !isErasing
})