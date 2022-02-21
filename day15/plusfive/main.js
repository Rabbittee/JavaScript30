/*
 * @Author:Claire Li
 * @Date:2022-02-20 20:27:07
 * @LastEditors:Claire Li
 * @LastEditTime:2022-02-21 23:50:12
 * @Description:
 */
const select = (query) => document.querySelector(query)
const items = JSON.parse(localStorage.getItem('plusfive_items')) || [];

function addItem(e) {
  e.preventDefault()
  const input = select('[name=item]')
  const item = {
    text: input.value,
    done: false
  }

  items.push(item)
  placeItem(items)
  localStorage.setItem('plusfive_items', JSON.stringify(items))
  input.value = ''
}

function placeItem(items = []) {
  select('.plates').innerHTML = items.map((item, i) => 
    `
      <li>
        <input type="checkbox" data-index=${i} ${item.done ? 'checked' : ''} id="item${i}" />
        <label for="item${i}">${item.text}</label>
      </li>
    `
    ).join('')
}

function saveToggle(e) {
  // 如果不是 input 就 return
  if (!e.target.matches('input')) return

  const el = e.target
  const index = el.dataset.index
  items[index].done = !items[index].done
  localStorage.setItem('plusfive_items', JSON.stringify(items))
  placeItem(items)
}

select('.add-items').addEventListener('submit', addItem)
select('.plates').addEventListener('click', saveToggle)
placeItem(items)
