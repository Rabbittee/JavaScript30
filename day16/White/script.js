const text = document.querySelector('h1');
const gap = text.offsetWidth;

function shadow(e) {
  let x = e.offsetX;
  let y = e.offsetY;
  let width = document.body.clientWidth;
  let height = document.body.clientHeight;

  const newX = width / 2 - x;
  const newY = height / 2 - y;

  text.style.textShadow = `
    ${newX}px ${newY * -1}px 0 rgba(255,125,64, 0.6),
    ${newX * -1}px ${newY}px 0 rgba(239,255,0, 0.6),
    ${newY}px ${newX * -1}px 0 rgba(169,255,0,0.7),
    ${newY * -1}px ${newX}px 0 rgba(0,173,255,0.7),
    ${newY}px ${newX * 0.5}px 0 rgba(190,0,255,0.5),
    ${newY * 0.5}px ${newX}px 0 rgba(255,152,0,0.3)
  `;
}

window.addEventListener('mousemove', shadow);
