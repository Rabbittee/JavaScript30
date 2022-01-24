import './style.css';

import mapboxgl from 'mapbox-gl';

import { createMap, addMapData, addMapEvent } from './map';
import { Bound, City } from './interfaces';
import { api, format } from './utils';
import { endpoint } from './config';

const bounds: Bound = [
  [-130, 49],
  [-62, 23],
]

const addSearchEvent = (map:mapboxgl.Map) => {
  const searchInput = document.querySelector<HTMLInputElement>('input[name="search"]')!;

  const displayMatches = (e: Event) => {
    const value = (<HTMLInputElement>e.target).value;

    /**
     * layerId: string
     * filter: <Expressions> [
     *   "in": Determines whether an item exists in an array or a substring exists in a string,
     *   "keyword": input value (downcase),
     *   "input": get city property of target (downcase),
     * ]
     */
    map.setFilter('point', ['in', ['downcase', value], ['downcase', ['get', 'city']]]);
  };

  searchInput.addEventListener('input', displayMatches);
}

const waitGenInitMapAndGetData: [Promise<mapboxgl.Map>, Promise<City[]>] = [
  createMap(bounds),
  api<City[]>(endpoint).then(format),
]

Promise.all(waitGenInitMapAndGetData)
  .then(([map, data]) => addMapData(map, data))
  .then(addMapEvent)
  .then(addSearchEvent)
