const $ = (target) => document.querySelector(target);
const rounded = (number) => Math.round((number + Number.EPSILON) * 100) / 100;

const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

if (!'geolocation' in navigator) {
  $('.speed').innerHTML = 'Geolocation is not supported by your browser';
}

navigator.geolocation.watchPosition(handleSucess, handleError);

function handleSucess({ coords }) {
  const { latitude, longitude, heading, speed } = coords;

  $('svg').style.transform = `rotate(${heading || 0}deg)`;
  $('.speed').innerHTML = `<div>${speed || 0} km/hr</div><br/>
  <div>latitude: ${rounded(latitude)}, longitude: ${rounded(longitude)}</div>`;
}

function handleError() {
  $('.speed').innerHTML = 'Unable to retrieve your location';
}
