// 因為 getElementById 常用的，拉成共用
const select = (selector) => document.querySelector(selector);

// TodoList 需要有一個輸入框
// 輸入框的 用途是 用來 建立 代辦事項
const inputValue = select('input#item');

// 當使用者按下 Add 按鈕後，就會建立新的代辦事項
function createNewTodoList() {
  // TODO...
  let getInputValue = inputValue.value;

  // save
  localStorage.setItem(getInputValue, getInputValue);

  // render
  renderTodoList();
}

// 代辦事項會以 checkbox 的形式 呈現在畫面的 清單上
function renderTodoList() {
  // TODO...
  const localStorage = window.localStorage;
  const renderHere = select('.plates');

  let innerHTML = '';
  for (var i = 0; i < localStorage.length; i++) {
    let renderKey = localStorage.key(i);
    let renderChecked = localStorage.getItem(renderKey);

    let items = { renderKey, renderChecked };

    if (items.renderChecked === 'true') {
      items.renderChecked = 'checked';
    } else if (items.renderChecked === 'false') {
    }

    innerHTML += `
      <li>
        <input type="checkbox" id="${items.renderKey}" ${items.renderChecked}></input>
        <label for="${items.renderKey}">${items.renderKey}</label>
      </li>
    `;
  }
  renderHere.innerHTML = innerHTML;
}

// 即便 網頁關閉後，重新回到該網頁，代辦事項也必須留存
window.onload = renderTodoList;

select('input#add').addEventListener('click', createNewTodoList);

function updateTodoList(e) {
  // 當 代辦事項的 checkbox 被打勾 也就表示 該事項已完成，
  const updateKey = e.target.id;
  const updateChecked = e.target.checked;
  localStorage.setItem(updateKey, updateChecked);
  let itemsUpdate = { updateKey, updateChecked };

  // 所以下次回到該網頁時，就不用呈現該事項
  if (itemsUpdate.updateChecked == true) {
    // remove
    localStorage.removeItem(`${itemsUpdate.updateKey}`);
  }
}

select('.plates').addEventListener('change', updateTodoList);
