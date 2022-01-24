import Data from './data.json' assert { type: "json" }

const input = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions')
const filteredData = new Set()

input.addEventListener('input', renderData)

function renderData(e) {
  let rawHTML = ''
  suggestions.innerHTML = ''

  // 每輸入一個新的英文字都要清空重新 Set 資料，不然會沒辦法拿到符合當下輸入的
  filteredData.clear()
  const target = e.target.value.toLowerCase()

  Data.filter((data) => data.city.toLowerCase()
    .includes(`${target}`))
    .forEach((data) => filteredData.add(data))

  Data.filter((data) => data.state.toLowerCase()
    .includes(`${target}`))
    .forEach((data) => filteredData.add(data))

  filteredData.forEach((data) => rawHTML += `<li>${data.city}, ${data.state}</li>`)

  suggestions.innerHTML = rawHTML
}