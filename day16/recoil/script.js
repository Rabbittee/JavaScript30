const text = document.querySelector('.hero');

function handleShadow({ offsetX, offsetY }) {
  const height = window.innerHeight,
    width = window.innerWidth;
  const x = width * 0.5 - offsetX,
    y = height * 0.5 - offsetY;

  text.style.textShadow = `
    ${x}px ${y}px 0 rgba(255,0,255,0.7),
    ${x * -1}px ${y * -1}px 0 rgba(0,255,255,0.7),
    ${y}px ${x * -1}px 0 rgba(0,255,0,0.7),
    ${y * -1}px ${x}px 0 rgba(0,0,255,0.7)
    `;
}

window.addEventListener('mousemove', handleShadow);
