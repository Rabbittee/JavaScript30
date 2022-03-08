const select = (target) => document.querySelector(target);
const arrow = select('.arrow');
const speed = select('.speed-value');
const lat = select('.latitude');
const lon = select('.longitude');

function useObserveLocation() {
  if (!navigator.geolocation) throw new Error('not support geolocation');

  function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  }

  return {
    watch: (func) => navigator.geolocation.watchPosition(func, error),
  };
}

function roundDecimal(val, precision = 0) {
  return Math.round(Math.round(val * Math.pow(10, precision + 1)) / 10) / Math.pow(10, precision);
}

useObserveLocation().watch(({ coords }) => {
  const rotate = coords.heading !== null ? roundDecimal(coords.heading, 6) : 0;
  const speed = coords.speed !== null ? roundDecimal(coords.speed, 1) : 0;
  lat.textContent = roundDecimal(coords.latitude, 6);
  lon.textContent = roundDecimal(coords.longitude, 6);
  speed.textContent = speed;
  arrow.style.transform = `rotate(${rotate}deg)`;
});
