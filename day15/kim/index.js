// 因為 getElementById 常用的，拉成共用
const select = (selector) => document.getElementById(selector);

// get：取得 input 框，裡面輸入的值
const item = select('item');

// get：當有點擊事件時，塞值進去
select('add').addEventListener('click', PushIntoStorage);

// Deal：1. 塞進陣列 ; 2. 塞進LocalStorage
const items = [];
function PushIntoStorage(e) {
  // 1. 塞進陣列
  const itemLocalstage = item.value;
  items.push({ key: itemLocalstage, done: false });

  // 2. 塞進LocalStorage
  localStorage.setItem('kimitems', JSON.stringify(items));
  e.preventDefault();
}

// 點擊時：也同步 Render 刷新畫面
select('add').addEventListener('click', RenderItems);

// Render：取值從 LocalStorage 渲染畫面
function RenderItems() {
  const getLocalstorage = JSON.parse(localStorage.getItem('kimitems'));

  let innerHTML = '';

  getLocalstorage.forEach((item, i) => {
    let kimKey = item.key;

    innerHTML += `
    <li>
      <input type="checkbox" id="${i}"></input>
      <label for="${i}">${kimKey}</label>
    </li>
    `;
  });
  select('plates').innerHTML = innerHTML;
}

// Render：進入畫面，就執行 Render，把當前 LocalStorage 有的值渲染在畫面上
RenderItems();
