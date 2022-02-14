const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const select = function (dom) {
  return document.querySelector(dom);
};

let cities = [];
fetch(endpoint)
  .then((response) => response.json())
  .then((data) => {
    cities = data;
    select('.search').addEventListener('input', renderData);
  })
  .catch((error) => console.log(`Error: ${error}`));

const filterData = (searchInput, data) => {
  return data.filter((item) => {
    return item.city.includes(searchInput) || item.state.includes(searchInput);
  });
};

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const renderData = (e) => {
  const inputValue = e.target.value;
  const filteredData = filterData(inputValue, cities);
  const domStructure = filteredData
    .map(({ city, state, population }) => {
      const cityName = city.replaceAll(inputValue, `<span class="hl">${inputValue}</span>`);
      const stateName = state.replaceAll(inputValue, `<span class="hl">${inputValue}</span>`);
      return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(population)}</span>
      </li>
    `;
    })
    .join('');
  select('.suggestions').innerHTML = domStructure;
};
