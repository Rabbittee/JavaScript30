const titles = ['我妻善逸', '竈門禰豆子', '竈門炭治郎', '嘴平伊之助'];

const app = document.getElementById('app');

const createPanel = (index) => {
  const div = document.createElement('div');
  const baseStyles = [
    'panel',
    `panel${index + 1}`,
    'relative',
    'w-full',
    'before:absolute',
    'before:top-0',
    'before:left-0',
    'before:w-full',
    'before:h-full',
    'before:bg-cover',
    'before:bg-left',
  ];
  const unOpenStyles = ['flex-1', 'before:bg-black', 'before:bg-opacity-70', 'before:grayscale'];
  const openStyles = ['flex-[2_2_0%]'];
  div.classList.add(...baseStyles, ...unOpenStyles);

  return {
    div,
    style: {
      unOpen: unOpenStyles,
      open: openStyles,
    },
  };
};

const createImg = (title) => {
  const img = document.createElement('img');
  img.src = `./images/${title}.png`;
  const baseStyles = [
    'absolute',
    'contain',
    'bg-no-repeat',
    'transition-all',
    'duration-1000',
    'delay-500',
  ];
  const unOpenStyles = ['inv', 'right-0', 'bottom-0', 'h-3/5'];
  const openStyles = [
    'noInvert',
    'right-full',
    'bottom-full',
    'h-4/5',
    'translate-x-full',
    'translate-y-full',
  ];
  img.classList.add(...baseStyles, ...unOpenStyles);
  return {
    img,
    style: {
      unOpen: unOpenStyles,
      open: openStyles,
    },
  };
};

const transformEvent = (panel) => (e) => {
  const target = e.target.closest('.panel');
  panel.panelStyle.unOpen.forEach((style) => target.classList.toggle(style));
  panel.panelStyle.open.forEach((style) => target.classList.toggle(style));

  panel.imgStyle.unOpen.forEach((style) => panel.img.classList.toggle(style));
  panel.imgStyle.open.forEach((style) => panel.img.classList.toggle(style));
};

const panels = titles.map((title, index) => {
  const { div: panel, style: panelStyle } = createPanel(index);
  const { img, style: imgStyle } = createImg(title);
  panel.appendChild(img);
  app.appendChild(panel);

  return {
    element: panel,
    img,
    panelStyle,
    imgStyle,
  };
});

panels.forEach((panel) => panel.element.addEventListener('click', transformEvent(panel)));
