const $ = (target) => document.querySelector(target);
const setLocation = (length, mousePosition) => length * 0.5 - mousePosition;

function handleShaddow({ offsetX: x, offsetY: y, target, currentTarget }) {
  const { innerWidth: width, innerHeight: height } = window;

  if (currentTarget !== target) {
    x += target.offsetLeft;
    y += target.offsetTop;
  }

  const centerX = setLocation(width, x);
  const centerY = setLocation(height, y);

  $('h1').style.textShadow = `
  ${centerX}px ${centerY}px 0 rgba(255,0,255,0.7),
  ${-centerX}px ${centerY}px 0 rgba(0,255,255,0.7),
  ${centerY}px ${-centerX}px 0 rgba(0,255,0,0.7),
  ${-centerY}px ${centerX}px 0 rgba(0,0,255,0.7)
  `;
}

$('.hero').addEventListener('mousemove', handleShaddow);
