const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const select = (identity) => document.querySelector(identity);

const getData = () => fetch(endpoint).then((res) => res.json());

const getFilteredDataByKeyword = (data, keyword = '') => {
  return !keyword
    ? []
    : data
        .filter(({ city, state }) => city.includes(keyword) || state.includes(keyword))
        .sort((a, b) => b.population - a.population);
};

const generateLi = ({ city, population }) => `
  <li>
      <span>${city}</span>
      <span>${population}</span>
  </li>
  `;

const renderList = (data = []) => {
  data = data.length === 0 ? [{ city: 'Nothing!', population: '' }] : data;
  select('.suggestions').innerHTML = data.map((item) => generateLi(item)).join('');
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
