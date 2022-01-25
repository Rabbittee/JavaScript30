import mapboxgl, { EventData, Expression, LngLatBoundsLike } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import { Feature, FeatureCollection, Point } from 'geojson';

import { Boundary, City } from './interfaces';
import { getBoundary } from './utils';
import { mapboxToken, green, red } from './config';

const genMultiPointGeoJson = (data: City[], func?: (arg: City) => Boolean): FeatureCollection => {
  if (func !== undefined) {
    data = data.filter(func);
  }
  const features: Feature<Point>[] = data.map((row) => {
    return {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [row.longitude, row.latitude],
      },
      properties: row,
    };
  });
  return {
    type: 'FeatureCollection',
    features: features,
  };
};

const getLinearExpression = (
  propertyKey: string,
  boundary: Boundary,
  minTarget: number | string,
  maxTarget: number | string,
  addZero: boolean = false
): Expression => {
  const expression: Expression = [
    'interpolate',
    ['linear'],
    ['get', propertyKey],
    boundary.min,
    minTarget,
    boundary.max,
    maxTarget,
  ];

  if (addZero) {
    expression.splice(5, 0, 0, typeof minTarget === 'string' ? '#FFFFFF' : 0);
  }

  return expression;
};

const genPaint = (data: City[]) => {
  const populationBoundary = getBoundary(data, (row) => <number>row.population);
  const radiusExpression = getLinearExpression('population', populationBoundary, 5, 20);
  const colorExpression = getLinearExpression(
    'growth_from_2000_to_2013',
    { min: -10, max: 30 },
    red,
    green,
    true
  );

  return {
    'circle-color': colorExpression,
    'circle-radius': radiusExpression,
    'circle-opacity': 0.7,
  };
};

const genPopupContent = (item: City): string => {
  const color = item.growth_from_2000_to_2013 > 0 ? green : red;
  const arrow =
    item.growth_from_2000_to_2013 > 0 ? '164 144 128 104 92 144' : '164 116 128 156 92 116';
  return `
<div class="p-2">
  <div class="flex gap-2 items-center">
      <div class="flex flex-col items-center">
        <svg width="60" height="60" fill="#000000" viewBox="0 0 256 256">
          <circle cx="128" cy="128" r="96" fill="${color}" stroke="#FFF" stroke-width="16"></circle>

          <polyline points="${arrow}" fill="none" stroke="#FFF" stroke-width="16"></polyline>
        </svg>
        <p class="${item.growth_from_2000_to_2013 > 0 ? 'text-green-600' : 'text-red-600'}">${
    item.growth_from_2000_to_2013
  }%</p>
      </div>
      <div class="flex flex-col">
          <div class="flex flex-row justify-between">
              <p class="text-xl">${item.city}</p>
          </div>
          <p class="text-gray-400 text-sm">${item.state}</p>
          <p class="text-gray-900 text-sm">total：${item.population}</p>
      </div>
  </div>
</div>
  `;
};

const genMouseFn = (map: mapboxgl.Map, popup: mapboxgl.Popup) => {
  const mouseenterFn = (e: EventData) => {
    map.getCanvas().style.cursor = 'pointer';

    const coordinates = e.features[0].geometry.coordinates.slice();
    const description = genPopupContent(<City>e.features[0].properties);

    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    popup.setLngLat(coordinates).setHTML(description).addTo(map);
  };

  const mouseleaveFn = () => {
    map.getCanvas().style.cursor = '';
    popup.remove();
  };

  return {
    enter: mouseenterFn,
    leave: mouseleaveFn,
  };
};

const createMap = async (bounds: LngLatBoundsLike): Promise<mapboxgl.Map> => {
  mapboxgl.accessToken = mapboxToken;
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    bounds: bounds,
  });

  return new Promise((resovle) => {
    map.on('load', () => {
      resovle(map);
    });
  });
};

const addMapData = (map: mapboxgl.Map, data: City[]): mapboxgl.Map => {
  map.addSource('point', {
    type: 'geojson',
    data: genMultiPointGeoJson(data),
  });

  map.addLayer({
    id: 'point',
    source: 'point',
    type: 'circle',
    paint: genPaint(data),
  });

  return map;
};

const addMapEvent = (map: mapboxgl.Map): mapboxgl.Map => {
  const popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false,
  });

  const { enter: mouseenterFn, leave: mouseleaveFn } = genMouseFn(map, popup);

  map.on('mouseenter', 'point', mouseenterFn);
  map.on('mouseleave', 'point', mouseleaveFn);
  return map;
};

export { createMap, addMapData, addMapEvent };
