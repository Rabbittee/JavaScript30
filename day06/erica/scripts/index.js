import { $ } from './utils.js';
import cities from './fetch.js';
import updateListing from './update.js';

function matchKeyword() {
  const keyword = this.value.trim().toLowerCase();
  let result = [];

  if (keyword === '') {
    result = [];
    this.value = '';
  } else {
    result = cities.filter((data) => {
      const { city, state } = data;
      return city.toLowerCase().match(keyword) || state.toLowerCase().match(keyword);
    });
  }
  updateListing(result);
}

const searchInput = $('.search-form input');
searchInput.addEventListener('input', matchKeyword);
