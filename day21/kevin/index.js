const select = (selector) => document.querySelector(selector);

const displaySpeed = (speed = 0) => {
  if (typeof speed !== 'number') return;
  select('.speed-value').textContent = speed;
};

const displayArrow = (headDeg = 0) => {
  if (typeof headDeg !== 'number') return;
  select('.arrow').style.transform = `rotate(${headDeg}deg)`;
};

const msToKmH = (ms = 0) => (ms * 0.001) / 3600;

const success = ({ coords }) => {
  const { speed, heading } = coords;
  displayArrow(heading);
  displaySpeed(msToKmH(speed));
};

const error = (err) => console.error('error', err);

window.addEventListener('DOMContentLoaded', () => {
  navigator.geolocation.watchPosition(success, error);
});
