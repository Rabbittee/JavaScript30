import './style.css';

const select = <T extends HTMLElement>(query: string) => document.querySelector<T>(query);

const addItems = select<HTMLInputElement>('.add-items');
const itemsList = select<HTMLUListElement>('.plates');
const items: Plate[] = JSON.parse(localStorage.getItem('alpha_items') || '[]');

function addItem(e: Event) {
  e.preventDefault();

  const target = <HTMLFormElement>e.target;

  const childNode = target.querySelector<HTMLInputElement>('[name=item]');

  if (!childNode) throw new Error('element is null');

  const text = childNode.value;

  const item = {
    text,
    done: false,
  };

  items.push(item);

  populateList(items, itemsList);
  localStorage.setItem('alpha_items', JSON.stringify(items));
  target.reset();
}

type Plate = {
  text: string;
  done: boolean;
};

function populateList(plates: Plate[], plateList: HTMLElement | null) {
  if (!plateList) throw new Error('element is null');
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
  if (!e.target) throw new Error('element is null');
  const target = <HTMLInputElement>e.target;
  const index = Number(target.dataset.index);
  items[index].done = !items[index].done;
  localStorage.setItem('alpha_items', JSON.stringify(items));
  populateList(items, itemsList);
}

addItems!.addEventListener('submit', addItem);
itemsList!.addEventListener('click', toggleDone);

populateList(items, itemsList);
