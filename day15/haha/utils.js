const $ = (target) => document.querySelector(target);

const addItems = $('.add-items');
const itemList = $('.plates');
const inputValue = $('input[type=text]');
let items = initialize();

addItems.addEventListener('submit', submit);
itemList.addEventListener('change', toggleDone);

function initialize() {
  if (getItems()) addTodolist();
  return !!getItems() ? getItems() : [];
}

function submit(e) {
  e.preventDefault();
  handleAddItems();
}

function handleAddItems() {
  items.push({ text: inputValue.value, done: false });
  setItems(items);
  addTodolist();
  inputValue.value = '';
}

function toggleDone({ target }) {
  items[target.id].done = target.checked;
  setItems(items);
}

function setItems(val) {
  localStorage.setItem('haha', JSON.stringify(val));
}

function getItems() {
  const data = localStorage.getItem('haha');
  return JSON.parse(data);
}

function addTodolist() {
  const data = getItems();
  itemList.innerHTML = data
    .map((el, i) => {
      return `<li>
      <input type="checkbox" id="${i}" ${el.done ? 'checked' : ''}>
      <label for="${i}">${el.text}</label>
      </li>`;
    })
    .join('');
}
