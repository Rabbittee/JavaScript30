import { $, commas } from './utils.js';

export default function updateListing(result) {
  $('.suggestions').innerHTML = result
    .map((data) => {
      return `<li>
      <span class="city">${data.city}</span>
      <span class="state">${data.state}</span>
      <span class="population">${commas(data.population)}</span>
    </li>`;
    })
    .join('');
}
