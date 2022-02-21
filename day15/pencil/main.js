function select(dom) {
  return document.querySelector(dom);
}

const items = JSON.parse(localStorage.getItem('bathroomSoComfortable')) || [];

function setStorage(key, value) {
  localStorage.setItem(key, value);
}

function getStorage(key) {
  return localStorage.getItem(key);
}

function toggleDone(e) {
  if (e.target.nodeName.toLowerCase() !== 'input') return;
  const index = e.target.dataset.index;
  console.log('toggle index: ' + index);
  console.log('toggle items: ', items);
  items[index].done = !items[index].done;
  setStorage('bathroomSoComfortable', JSON.stringify(items));
  renderToDom('.plates', items);
}

function addItem(e) {
  e.preventDefault();
  // 取得輸入欄位
  const input = e.target[0];
  // 設定初始 addItem 值
  const itemObj = {
    done: false,
    text: input.value,
  };
  // 將上述物件 push 至 items array
  items.push(itemObj);
  setStorage('bathroomSoComfortable', JSON.stringify(items));
  // 重置輸入欄位的值
  input.value = '';
  renderToDom('.plates', items);
}

function renderToDom(targetDom, dataList) {
  select(targetDom).innerHTML = dataList.map((item, index) => listItemPlate(item, index)).join(' ');
}

function listItemPlate(item, index) {
  return `
    <li>
      <input type="checkbox" data-index=${index} id="item${index}" ${item.done ? 'checked' : ''} />
      <label for="item${index}">${item.text}</label>
    </li>
  `;
}
select('.add-items').addEventListener('submit', addItem);
select('.plates').addEventListener('click', toggleDone);
renderToDom('.plates', items);
