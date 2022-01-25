const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const select = (identity) => document.querySelector(identity);

const getData = () => fetch(endpoint).then((res) => res.json());

const getFilteredDataByKeyword = (data, keyword = '') => {
  if (keyword === '') return [];
  return data
    .filter(({ city, state }) => city.includes(keyword) || state.includes(keyword))
    .sort((a, b) => b.population - a.population);
};

const generateEmptyLi = `<li>Nothing</li>`;
const generateMultiLi = (data) => {
  return data
    .map(
      ({ city, state, population }) => `
      <li>
        <span>${city}, ${state}</span>
        <span>${population}</span>
      </li>
      `
    )
    .join('');
};

const renderList = (data = []) => {
  const html = data.length === 0 ? generateEmptyLi : generateMultiLi(data);
  select('.suggestions').innerHTML = html;
};

const handleSearch = (data, keyword) => {
  const filteredData = getFilteredDataByKeyword(data, keyword);
  renderList(filteredData);
};

const initialMethod = async () => {
  const data = await getData();
  select('input.search').addEventListener('input', (e) => handleSearch(data, e.target.value));
};

initialMethod();
