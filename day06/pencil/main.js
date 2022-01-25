const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// * get DOM element
const select = function (dom) {
  return document.querySelector(dom);
};

// * get data
let cities = [];
fetch(endpoint)
  .then((response) => response.json())
  .then((data) => {
    cities.push(...data);
    initialRender();
  })
  .catch((error) => console.log(`Error: ${error}`));
console.log(cities);

// * numberWithCommas

// * initial render
const initialRender = (data = cities) => {
  const domStructure = data
    .map(({ city, state, population }) => {
      return `
      <li>
        <span class="name">${city}, ${state}</span>
        <span class="population">${population}</span>
      </li>
    `;
    })
    .join('');
  select('.suggestions').innerHTML = domStructure;
};

// * render Data
const renderData = (data) => {
  const domStructure = cities
    .map(({ city, state, population }) => {
      // * filter data here
      // * if match inputString -> true
      // * and mark the string which match the ReGex
      city = data.match(/${data}/);
      state = state.includes(data);
      return `
      <li>
        <span class="name">${city}, ${state}</span>
        <span class="population">${population}</span>
      </li>
    `;
    })
    .join('');
  select('.suggestions').innerHTML = domStructure;
};

// * add input event listener and update searchInput's value
let searchInput = '';
select('.search').addEventListener('input', (e) => {
  searchInput = e.target.value;
  renderData(searchInput);
});

// * initial render

// * 0. rendering the city list
// * 1. when type word in input, active the function filter the Data array.
// * 2. typing -> search the e.target.value
// * 3. after search -> rendering the DOM
// TODO:  <span class="population">${numberWithCommas(population)}</span>
