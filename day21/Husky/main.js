const updateData = (id, value) => {
  if (id === 'timestamp') {
    value = value.toLocaleString();
  } else if (typeof value === 'boolean') {
    value = value === null ? 'disable' : 'enabled';
  } else {
    value = value === null ? '' : value.toFixed(4);
  }
  document.getElementById(id).innerText = value;
};

function success(pos) {
  const { timestamp } = pos;
  updateData('timestamp', new Date(timestamp));
  for (let key in pos.coords) {
    updateData(key, pos.coords[key]);
  }
}

function error(err) {
  alert('ERROR(' + err.code + '): ' + err.message);
}

navigator.geolocation.watchPosition(success, error);

window.ondeviceorientation = (event) => {
  ['absolute', 'alpha', 'beta', 'gamma', 'webkitCompassHeading'].forEach((key) => {
    updateData(key, event[key]);
  });
};
