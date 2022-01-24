import { fetchData } from './fetch.js';
import './header.js';

const data = await fetchData();

const select = (element) => document.querySelector(element);

const init = () => (select('.result').innerHTML = ` <li class="list-item">No result</li>`);

/**
 *
 * @param {string} input
 * @param {Object} data
 * @returns
 */
const matchKey = (input, data) => {
  const reg = new RegExp(input, 'gi');
  if (input === '') return;
  return data.city.match(reg) || data.state.match(reg);
};

const formatNumber = (number) => number.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');

/**
 * 取得符合關鍵字的物件
 * @param {InputEvent} e
 * @returns
 */
const getMatch = (e) => {
  const keyWord = e.target.value;

  const current = data.filter((item) => matchKey(keyWord, item));

  if (current.length === 0) return init();
  const html = current
    .map((item) => {
      const { state, city, population } = item;

      const populationFormated = formatNumber(population);

      return `
    <li class="list-item">${city}, ${state} <small>${populationFormated}</small></li>
    `;
    })
    .join('');

  select('.result').innerHTML = html;
};

select('.search').addEventListener('input', getMatch);
