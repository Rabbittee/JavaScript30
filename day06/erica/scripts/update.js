import { $, commas } from './utils.js';

export default function updateListing(result) {
  const content = $('.suggestions');
  content.innerHTML = '';

  let str = '';
  result.forEach((data) => {
    str += `
      <li>
        <span class="city">${data.city}</span>
        <span class="state">${data.state}</span>
        <span class="population">${commas(data.population)}</span>
      </li>`;
  });
  content.innerHTML = str;
}
