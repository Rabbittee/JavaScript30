const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
// 獲取資料
fetch(endpoint)
  .then((res) => res.json())
  .then((data) => cities.push(...data));

const input = document.querySelector('input');
input.addEventListener('input', filterKeyWords);

function filterKeyWords() {
  removeChild(); // 搜尋之前先把上一筆子節點清空
  const regex = new RegExp(input.value, 'gi');
  const result = cities.filter((el) => {
    return regex.test(el.city) || regex.test(el.state);
  });
  result.forEach((el) => {
    appendChild(el); // 新增子節點
  });
}

// 新增子節點
function appendChild(el) {
  const ul = document.querySelectorAll('.suggestions');
  const regex = new RegExp(input.value, 'gi');
  const markCity = el.city.replace(regex, `<span class="hl">${input.value}</span>`);
  const markState = el.state.replace(regex, `<span class="hl">${input.value}</span>`);
  ul[0].insertAdjacentHTML(
    'beforeend',
    `<li>
        <span class="name">${markCity}, ${markState}</span>
        <span class="population">${el.population}</span>
    </li>`
  );
}

// 移除子節點
function removeChild() {
  const ul = document.querySelector('.suggestions');
  ul.innerHTML = '';
}
