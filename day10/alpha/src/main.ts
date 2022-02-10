import './style.css';
import { Header } from './header';

Header();

type List = {
  id: number;
  title: string;
};

let list: List[] = [];

list = JSON.parse(localStorage.getItem('todolist') || '[]');

let completeList: List[] = [];
completeList = JSON.parse(localStorage.getItem('completelist') || '[]');

const select = <T extends HTMLElement>(query: string) => document.querySelector<T>(query);

const inProgressLists = select('.in-progress') as HTMLElement;
const completeLists = select('.complete') as HTMLElement;
const todoItem = select('#todo') as HTMLInputElement;
const submitForm = select('form') as HTMLFormElement;

function toggleStatus(key: number, status: string) {
  status === 'todo' ? changeStatus(list, completeList, key) : changeStatus(completeList, list, key);
  update();
}

function changeStatus(cur: List[], acc: List[], key: number) {
  const index = cur.findIndex((item) => item.id === key);
  acc.push(cur[index]);
  cur.splice(index, 1);
}

function addTodo(e: Event) {
  e.preventDefault();
  if (!todoItem.value) return;
  const todo = {
    id: Date.now(),
    title: todoItem.value,
  };
  list.push(todo);
  update();
}

submitForm.addEventListener('submit', addTodo);

inProgressLists.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  const parent = target.parentNode?.parentNode as HTMLElement;
  if (target.classList.contains('delete')) {
    deleteItem(e);
  } else if (parent.classList.contains('todo-item')) {
    const id = Number(parent.dataset.key);
    toggleStatus(id, 'todo');
  }
});

completeLists.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  const parent = target.parentNode?.parentNode as HTMLElement;
  if (target.classList.contains('delete')) {
    deleteItem(e);
  } else if (parent.classList.contains('complete-item')) {
    const id = Number(parent.dataset.key);
    toggleStatus(id, 'complete');
  }
});

function update() {
  inProgressLists.textContent = '';
  completeLists.textContent = '';
  localStorage.setItem('todolist', JSON.stringify(list));
  localStorage.setItem('completelist', JSON.stringify(completeList));
  render();
}
update();

function deleteItem(e: Event) {
  console.log('delete');
  const target = e.target as HTMLElement;
  const parent = target.parentNode as HTMLElement;
  parent.classList.remove('animate-fadeIn');
  parent.classList.add('animate-fadeOut');
}

inProgressLists.addEventListener('animationend', (e) => {
  checkDelete(e, list);
});

completeLists.addEventListener('animationend', (e) => {
  checkDelete(e, completeList);
});

function checkDelete(e: AnimationEvent, array: List[]) {
  if (e.animationName !== 'fadeOut') return;
  const target = select('.animate-fadeOut') as HTMLElement;
  const id = Number(target.dataset.key);
  const index = array.findIndex((item) => item.id === id);
  array.splice(index, 1);
  update();
}

function render() {
  renderTodoList();
  renderCompleteList();
}

function renderTodoList() {
  let context = '';
  list.map((item) => {
    const element = `<li class="flex bg-zinc-50 rounded-lg p-4 justify-between items-center todo-item animate-fadeIn" data-key="${item.id}">
  
    <div class="flex justify-center items-center space-x-4">
    <button
    class="toggle text-gray-400 border border-gray-400 rounded-full w-6 h-6 flex justify-center items-center active:scale-90 transition-all duration-300"
    >
    ✓
  </button> 
      <label class="text-gray-600">${item.title}</label>
    </div>
    <button
      class="delete text-red-500 border border-red-500 p-2 rounded-lg hover:bg-red-500 hover:text-white transition-colors duration-300"
      
    >
      Delete
    </button>
    </li>`;
    context += element;
  });

  inProgressLists.innerHTML = context;
}

function renderCompleteList() {
  let context = '';
  completeList.map((item) => {
    const element = `<li class="flex bg-zinc-50 rounded-lg p-4 justify-between items-center complete-item animate-fadeIn " data-key="${item.id}">
  
    <div class="flex justify-center items-center space-x-4">
    <button
    class="toggle text-teal-400 border border-teal-400 rounded-full w-6 h-6 flex justify-center items-center active:scale-90 transition-all duration-300"
    >
    ✓
  </button> 
      <label class="text-teal-600 line-through">${item.title}</label>
    </div>
    <button
      class="delete text-red-500 border border-red-500 p-2 rounded-lg hover:bg-red-500 hover:text-white transition-colors duration-300 "
      
    >
      Delete
    </button>
    </li>`;
    context += element;
  });
  completeLists.innerHTML = context;
}
