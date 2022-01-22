import { City } from './interfaces';
import { api, format } from './utils';
import './style.css';
import { createMap } from './map';
import { endpoint } from './config';

api<City[]>(endpoint)
  .then(format)
  .then(createMap)
  .then((map) => {
    const searchInput = document.querySelector<HTMLInputElement>('input[name="search"]')!;

    const displayMatches = (e: Event) => {
      const value = (<HTMLInputElement>e.target).value;
      map.setFilter('point', ['in', ['downcase', value], ['downcase', ['get', 'city']]]);
    };

    searchInput.addEventListener('change', displayMatches);
    searchInput.addEventListener('keyup', displayMatches);
  });
