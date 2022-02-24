const select = (selector) => document.querySelector(selector);

const middleX = window.innerHeight / 2;
const middleY = window.innerWidth / 2;

const setMultiTextShadow = (configs = []) => {
  const setTextShadow = ({ x, y, color }) => `${x}px ${y}px 0 ${color}`;
  return configs.map(setTextShadow).join(',');
};

const onMouseMove = ({ clientX, clientY }) => {
  const offsetX = clientX - middleX;
  const offsetY = clientY - middleY;

  select('.hero h1').style.textShadow = setMultiTextShadow([
    {
      x: -offsetX / 2,
      y: -offsetY / 2,
      color: `rgba(255, 255, 1, 0.5)`,
    },
    {
      x: -offsetX / 3,
      y: -offsetY / 3,
      color: `rgba(255, 1, 255, 0.5)`,
    },
    {
      x: offsetX / 2,
      y: offsetY / 2,
      color: `rgba(1, 255, 255, 0.5)`,
    },
    {
      x: offsetX / 3,
      y: offsetY / 3,
      color: `rgba(255, 255, 1, 0.5)`,
    },
    {
      x: offsetX / 2,
      y: -offsetY / 2,
      color: `rgba(255, 1, 255, 0.5)`,
    },
    {
      x: offsetX / 3,
      y: -offsetY / 3,
      color: `rgba(1, 255, 255, 0.5)`,
    },
    {
      x: -offsetX / 2,
      y: offsetY / 2,
      color: `rgba(255, 1, 255, 0.5)`,
    },
    {
      x: -offsetX / 3,
      y: offsetY / 3,
      color: `rgba(1, 255, 255, 0.5)`,
    },
  ]);
};

document.addEventListener('mousemove', onMouseMove);
