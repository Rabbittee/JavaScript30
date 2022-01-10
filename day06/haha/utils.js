const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const cities = [];
// 獲取資料
fetch(endpoint)
  .then((res) => res.json())
  .then((data) => cities.push(...data));

const input = document.querySelector("input");

input.addEventListener("focus", clearContent);
input.addEventListener("blur", testInputVal);
input.addEventListener("input", filterKeyWords);

function clearContent() {
  this.setAttribute("placeholder", "");
}

function testInputVal() {
  const text = this.value === "" ? "City or State" : this.value;
  this.setAttribute("placeholder", text);
}

function filterKeyWords() {
  removeChild(); // 搜尋之前先把上一筆子節點清空
  const result = cities.filter((el) => {
    return el.city.includes(this.value) || el.state.includes(this.value);
  });
  result.forEach((el) => {
    appendChild(el); // 新增子節點
  });
}
// 新增子節點
function appendChild(el) {
  const ul = document.querySelectorAll(".suggestions");
  const markCity = el.city.replace(
    input.value,
    `<span class="hl">${input.value}</span>`
  );
  const markState = el.state.replace(
    input.value,
    `<span class="hl">${input.value}</span>`
  );
  ul[0].insertAdjacentHTML(
    "afterbegin",
    `<li>
        <span class="name">${markCity}, ${markState}</span>
        <span class="population">${el.population}</span>
    </li>`
  );
}
