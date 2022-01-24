import { fetchData } from './fetch.js';

const data = await fetchData();

const search = document.querySelector('.search');

const result = document.querySelector('.result');

search.addEventListener('input', (e) => {
  console.log(e.target.value);
});

const current = data.filter((item) => item.city.match('N'));

console.log(current);
