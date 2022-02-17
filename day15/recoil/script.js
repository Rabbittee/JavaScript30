const select = (target) => document.querySelector(target);

const order = select('.order');
const itemsList = select('.plates');
const items = [];
const ordersStorage = storage('orders');
const pushOrder = (course) => items.push({ text: course, done: false });
const saveOrders = () => ordersStorage.save(items);
const resetForm = () => order.reset();

function storage(key) {
  return {
    save(payload) {
      localStorage.setItem(key, JSON.stringify(payload));
    },
    load() {
      return JSON.parse(localStorage.getItem(key));
    },
  };
}

function updateList() {
  itemsList.innerHTML = items
    .map(
      (item, i) => `
    <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${item.done ? 'checked' : ''} />
        <label for="item${i}">${item.text}</label>
    </li>
    `
    )
    .join('');
}

function loadList() {
  const orders = ordersStorage.load();

  if (orders === null) {
    itemsList.innerHTML = '<li>empty</li>';
    return;
  }

  orders.forEach((order) => items.push(order));
  updateList();
}

function handleSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const mainCourse = formData.get('item');

  Promise.resolve(mainCourse).then(pushOrder);

  Promise.resolve().then(resetForm).then(saveOrders).then(updateList);
}

function changeOrderState({ target }) {
  const updateOrderState = (el) => {
    const order = items[el.dataset.index];
    order.done = el.checked;
    return order;
  };

  Promise.resolve(target).then(updateOrderState).then(saveOrders).then(updateList);
}

document.addEventListener('DOMContentLoaded', loadList);
order.addEventListener('submit', handleSubmit);
itemsList.addEventListener('change', changeOrderState);
