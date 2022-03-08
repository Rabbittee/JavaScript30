const updateData = (id, value) => {
  if (id === 'timestamp') {
    value = value.toLocaleString();
  } else if (typeof value === 'boolean') {
    value = value ? 'enabled' : 'disable';
  } else {
    value = value === null ? '' : value.toFixed(4);
  }
  document.getElementById(id).innerText = value;
};

function successPosition(pos) {
  const { timestamp } = pos;
  updateData('timestamp', new Date(timestamp));
  for (let key in pos.coords) {
    updateData(key, pos.coords[key]);
  }
}

function errorPosition(err) {
  alert('ERROR(' + err.code + '): ' + err.message);
}

navigator.geolocation.watchPosition(successPosition, errorPosition);

function deviceOrientation(event) {
  if (event.absolute) {
    return updateData('alphaAbsolute', event.alpha);
  }
  ['absolute', 'alpha', 'beta', 'gamma', 'webkitCompassHeading'].forEach((key) => {
    updateData(key, event[key]);
  });
}

window.ondeviceorientation = deviceOrientation;
'ondeviceorientationabsolute' in window && (window.ondeviceorientationabsolute = deviceOrientation);
