import './style.css';

import mapboxgl from 'mapbox-gl';

import { createMap, addMapData, addMapEvent } from './map';
import { City } from './interfaces';
import { api, format } from './utils';
import { endpoint } from './config';

const bounds: [[number, number], [number, number]] = [
  [-130, 49],
  [-62, 23],
]

const addSearchEvent = (map:mapboxgl.Map) => {
  const searchInput = document.querySelector<HTMLInputElement>('input[name="search"]')!;

  const displayMatches = (e: Event) => {
    const value = (<HTMLInputElement>e.target).value;
    map.setFilter('point', ['in', ['downcase', value], ['downcase', ['get', 'city']]]);
  };

  searchInput.addEventListener('change', displayMatches);
  searchInput.addEventListener('keyup', displayMatches);
}

const promises: [Promise<mapboxgl.Map>, Promise<City[]>] = [
  createMap(bounds),
  api<City[]>(endpoint).then(format),
]

Promise.all(promises)
  .then(([map, data]) => addMapData(map, data))
  .then(addMapEvent)
  .then(addSearchEvent)
