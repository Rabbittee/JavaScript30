const select = (target) => document.querySelector(target);
const arrow = select('.arrow');
const speed = select('.speed-value');
const lat = select('.latitude');
const lon = select('.longitude');

function useObserveLocation() {
  if (!navigator.geolocation) throw new Error('not support geolocation');
  return {
    watch: (func) => navigator.geolocation.watchPosition(func),
  };
}

useObserveLocation().watch(({ coords }) => {
  const rotate = coords.heading !== null ? coords.heading : 0;
  const speed = coords.speed !== null ? coords.speed : 0;
  lat.textContent = coords.latitude.toFixed(2);
  lon.textContent = coords.longitude.toFixed(2);
  speed.textContent = speed;
  arrow.style.transform = `rotate(${rotate}deg)`;
});
