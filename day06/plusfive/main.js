/*
 * @Author:Claire Li
 * @Date:2022-01-20 11:51:59
 * @LastEditors:Claire Li
 * @LastEditTime:2022-01-25 00:10:28
 * @Description:
 */
import Data from './data.json' assert { type: 'json' };

const input = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
const filteredData = new Set();
let zoomNumber = 0;
let map;
let marker;
let city = {
  name: 'San Francisco',
  population: 837442,
  rank: 14,
  latitude: 37.7749295,
  longitude: -122.4194155,
};

input.addEventListener('input', renderData);
suggestions.addEventListener('click', showMap);

function renderData(e) {
  let rawHTML = '';
  suggestions.innerHTML = '';

  // 每輸入一個新的英文字都要清空重新 Set 資料，不然會沒辦法拿到符合當下輸入的
  filteredData.clear();
  const target = e.target.value.toLowerCase();

  if (target) {
    Data.filter((data) => data.city.toLowerCase().includes(`${target}`)).forEach((data) =>
      filteredData.add(data)
    );

    Data.filter((data) => data.state.toLowerCase().includes(`${target}`)).forEach((data) =>
      filteredData.add(data)
    );

    filteredData.forEach((data) => {
      // const regex = new RegExp(target, 'gi')
      // const city = data.city.replace(regex, `<span class="hl">${data.city}</span>`)
      // console.log(city)
      rawHTML += `<li>${data.city}, ${data.state}<i class="fas fa-map-marker-alt mapIcon" data-name="${data.city}" data-lat="${data.latitude}" data-lng="${data.longitude}" data-pop="${data.population}" data-rank="${data.rank}"></i></li>`;
    });

    suggestions.innerHTML = rawHTML;
  } else {
    rawHTML = `<li>Filter for a city</li>
    <li>or a state <i class="fas fa-map-marker-alt mapIcon"></i></li>`;

    suggestions.innerHTML = rawHTML;
  }
}

(function buildMap() {
  zoomNumber = 13;

  map = L.map('map').setView([city.latitude, city.longitude], zoomNumber);
  marker = L.marker([city.latitude, city.longitude]).addTo(map);
  marker
    .bindPopup(
      `<b>City:</b> ${city.name}<br><b>Population:</b> ${city.population}<br><b>Rank:</b> ${city.rank}`
    )
    .openPopup();

  // 要用 token 才能有圖層 rrr
  L.tileLayer(
    'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2xhaXJlbGkiLCJhIjoiY2t5c2F2MHAxMTIyYTJybGVvamg0ZWx6eiJ9.rqFJM81BYUt3p6F5zBD_jA',
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'your.mapbox.access.token',
    }
  ).addTo(map);
})();

function showMap(e) {
  const data = e.target.dataset;
  city = {
    name: data.name,
    population: Number(data.pop),
    rank: Number(data.rank),
    latitude: Number(data.lat),
    longitude: Number(data.lng),
  };

  map.setView([city.latitude, city.longitude], zoomNumber);
  marker = L.marker([city.latitude, city.longitude]).addTo(map);
  marker
    .bindPopup(
      `<b>City:</b> ${city.name}<br><b>Population:</b> ${city.population}<br><b>Rank:</b> ${city.rank}`
    )
    .openPopup();
}
