const initLatLng = [24, 120.4];
const zoom = 13;

const map = L.map('map').setView(initLatLng, zoom);
L.tileLayer('https://mt{s}.google.com/vt/x={x}&y={y}&z={z}&hl=zh-TW', {
  subdomains: '012',
  maxZoom: 20,
  attribution: 'Map data: &copy; Google',
}).addTo(map);

const pikachuIcon = L.icon({
  iconUrl: 'images/pikachu.gif',
  iconSize: [30, 48],
  iconAnchor: [15, 24],
});

const directionIcon = L.icon({
  iconUrl: 'images/direction.png',
  iconSize: [100, 100],
  iconAnchor: [50, 50],
});

const direction = L.marker(initLatLng, { icon: directionIcon });
direction.addTo(map);

const pikachu = L.marker(initLatLng, { icon: pikachuIcon });
pikachu.addTo(map);

const updateData = (id, value) => {
  if (value === null || value === undefined) {
    return;
  } else if (id === 'timestamp') {
    value = value.toLocaleString();
  } else if (typeof value === 'boolean') {
    value = value ? 'enabled' : 'disable';
  } else {
    value = value === null ? '' : value.toFixed(6);
  }
  document.getElementById(id).innerText = value;
};

function successPosition(pos) {
  const { timestamp } = pos;
  updateData('timestamp', new Date(timestamp));
  for (let key in pos.coords) {
    updateData(key, pos.coords[key]);
  }
  pikachu.setLatLng([pos.coords.latitude, pos.coords.longitude]);
  direction.setLatLng([pos.coords.latitude, pos.coords.longitude]);
  map.setView([pos.coords.latitude, pos.coords.longitude], 13);
}

function errorPosition(err) {
  alert('ERROR(' + err.code + '): ' + err.message);
}

navigator.geolocation.watchPosition(successPosition, errorPosition);

function deviceOrientation(event) {
  if (event.absolute) {
    if (!event.alpha) return;

    const directionDom = document.querySelector('img[src="images/direction.png"]');

    let transform = directionDom.style.transform;
    directionDom.style.transform = transform.split(' rotate')[0] + ` rotate(${-event.alpha}deg)`;

    return updateData('alphaAbsolute', event.alpha);
  }
  ['absolute', 'alpha', 'beta', 'gamma'].forEach((key) => {
    updateData(key, event[key]);
  }); //, 'webkitCompassHeading'
}

window.ondeviceorientation = deviceOrientation;
'ondeviceorientationabsolute' in window && (window.ondeviceorientationabsolute = deviceOrientation);
