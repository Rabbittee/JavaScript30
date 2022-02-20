const select = (selector) => document.querySelector(selector);
const create = (tag) => document.createElement(tag);

function handleLocalStorage(key = 'todo') {
  return {
    get: () => JSON.parse(localStorage.getItem(key)),
    set: (value) => localStorage.setItem(key, JSON.stringify(value)),
  };
}

function Todo() {
  const todoCheckboxName = 'todo';

  const selectors = {
    form: '#form-add-todo',
    formList: '#form-todo-items',
    todoList: '#list-todo',
  };

  let todoItems = [];

  const handleTodoItems = (() => {
    const localTodo = handleLocalStorage();

    const updateAfterControl = (newItems) => {
      localTodo.set(newItems);
      updateTodoItems();
    };

    const push = (newItem) => {
      todoItems = [...todoItems, newItem];
      updateAfterControl(todoItems);
    };
    const replaceAll = (fullData) => {
      todoItems = [...fullData];
      updateAfterControl(todoItems);
    };

    const clear = () => {
      todoItems = [];
      updateAfterControl(todoItems);
    };

    const init = () => {
      todoItems = localTodo.get();
      updateAfterControl(todoItems);
    };

    return {
      push,
      clear,
      replaceAll,
      init,
    };
  })();

  function createLi({ text, id, checked = false }) {
    const inputId = `${id}`;

    const li = create('li');

    const span = create('span');
    span.textContent = text;

    const checkbox = create('input');
    checkbox.type = 'checkbox';
    checkbox.name = todoCheckboxName;
    checkbox.id = inputId;
    checkbox.checked = checked;
    checkbox.value = inputId;

    const label = create('label');
    label.htmlFor = inputId;

    label.appendChild(span);
    li.appendChild(checkbox);
    li.appendChild(label);

    return li;
  }

  function createTodoItemsFragment(todoItems = []) {
    const fragment = document.createDocumentFragment();

    todoItems.forEach((todoItem) => {
      const isAllowToCreate = todoItem.text !== undefined && todoItem.id !== undefined;
      if (isAllowToCreate === false) return;
      fragment.appendChild(createLi(todoItem));
    });

    return fragment;
  }

  function updateTodoItems() {
    const listFragment = createTodoItemsFragment(todoItems);
    select(selectors.todoList).innerHTML = '';
    select(selectors.todoList).appendChild(listFragment);
  }

  function getFormData(formElement) {
    if (formElement === undefined)
      throw Error('form event should be passed to getFormEntries function');
    const formData = new FormData(formElement);
    const formEntries = formData.entries();
    return {
      formData,
      formEntries: Object.fromEntries(formEntries),
    };
  }

  function onSubmitForm(event) {
    event.preventDefault();

    const { item: newTodo } = getFormData(event.target).formEntries;
    // reference for creating specific value with timestamp: https://stackoverflow.com/questions/8012002/create-a-unique-number-with-javascript-time
    const idFromTimeStamp =
      event.timeStamp.toString(36).replace('.', '') + Math.random().toString(36).substring(2);

    // push new item
    handleTodoItems.push({ text: newTodo, id: idFromTimeStamp });

    // reset form
    event.target.reset();
  }

  function onChangeTodoItems() {
    const { formData } = getFormData(select(selectors.formList));
    const currentCheckboxValues = formData.getAll(todoCheckboxName);

    // generate new data with form
    const newTodoItems = todoItems.map((todoItem) => {
      const isChecked = currentCheckboxValues.includes(todoItem.id);
      todoItem.checked = isChecked;
      return todoItem;
    });

    // replace with new data
    handleTodoItems.replaceAll(newTodoItems);
  }

  handleTodoItems.init();
  select(selectors.form).addEventListener('submit', onSubmitForm);
  select(selectors.formList).addEventListener('change', onChangeTodoItems);
}

Todo();
