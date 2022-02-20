import './style.css';

const select = <T extends HTMLElement>(query: string) => document.querySelector<T>(query);

const addItems = select('.add-items') as HTMLInputElement;
const itemsList = select('.plates') as HTMLElement;
const items: Plate[] = JSON.parse(localStorage.getItem('items') || '[]');

function addItem(e: Event) {
  e.preventDefault();
  const target = e.target as HTMLFormElement;
  if (!target) return;

  const childNode = target.querySelector('[name=item]') as HTMLInputElement;

  const text = childNode.value;

  const item = {
    text,
    done: false,
  };

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  target.reset();
}

type Plate = {
  text: string;
  done: boolean;
};

function populateList(plates: Plate[], plateList: HTMLElement) {
  plateList.innerHTML = plates
    .map((plate, i) => {
      return `
    <li>
    <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
    <label for="item${i}">${plate.text}</label>
  </li>
    `;
    })
    .join('');
}

function toggleDone(e: Event) {
  if (!(e.target instanceof HTMLInputElement)) return;
  const target = e.target as HTMLInputElement;
  const index = Number(target.dataset.index);
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);
