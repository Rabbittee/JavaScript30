// 取得JSON檔
const getData = async () => {
  const response = await fetch(
    'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
  );
  const res = await response.json();
  return res;
};

// 將結果放入陣列方便取用
let data = [];
getData().then(function (result) {
  data.push(...result);
});

// 依正規表示式過濾符合的資料
function findWord(word, data) {
  return data.filter((place) => {
    const re = new RegExp(word, 'gi');
    return place.city.match(re) || place.state.match(re);
  });
}

// 傳回過濾結果
function getAnswer() {
  const answer = findWord(this.value, data);
  // 鳥神相救：this.value另存變數
  const keyword = this.value;
  const keywordRe = new RegExp(keyword, 'gi');
  // 結果更新至頁面
  const placeList = answer.map(function (place) {
    // highlight搜尋文字 哈奇建議：使用replace
    const city = place.city.replace(keywordRe, `<span class="hl">${keyword}</span>`);
    const state = place.state.replace(keywordRe, `<span class="hl">${keyword}</span>`);
    return `<li><span>${city}, ${state}</span> <span class="population">${place.population}</span></li>`;
  });
  document.querySelector('.suggestions').innerHTML = placeList.join('');
}

// 即時取得使用者輸入文字
document.getElementById('searchInput').addEventListener('input', getAnswer);
