# Javascript 30 Days

## day06 - Flex Panel Gallery

#### Logic

```js
const select = (target) => document.querySelector(target);

//抓取input element
const searchBar = select("input.search");

//抓取ul element
const list = select("ul.suggestions");

// 避免重複呼叫接下來的搜尋
const debounce = (delay, func) => {
  let timer;
  return (payload) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => func(payload), delay);
  };
};

//處理搜尋到的字高亮出來
function highLight(keyword, content) {
  const regex = new RegExp(`(${keyword})`, "gi");
  return content.replace(regex, "<span class='hl'>$1</span>");
}
```

```js
async function handleSearch(keyword) {
  try {
    const payload = await fetch(url);
    const tourSeries = await payload.json(); //取得資料
    if (tourSeries && Array.isArray(tourSeries)) {
      //檢查進來的資料是是否有效
      const result = tourSeries
        .filter((tour) => tour.city.includes(keyword)) //過濾出搜尋到的資料
        .map((tour) => {
          //過濾出來的資料列舉出來
          return `
                    <li>
                        <span class="name">${highLight(
                          //搜尋到的字高亮出來
                          keyword,
                          tour.city
                        )}</span>
                        <span class="population">${tour.population}</span>
                    </li>
                `;
        })
        .join(""); //把全部的字串合併起來
      list.innerHTML = result; //塞進ul元素
    }
  } catch (err) {
    console.warn(err);
  }
}

searchBar.addEventListener("change", function ({ target: { value } }) {
  debounce(600, handleSearch)(value); //這邊用debounce是避免字還沒打完就執行接下來的搜尋
});
```

#### Stack

- debounce 這只是個概念

- [RegExp](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

- [replace](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

- [join](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
