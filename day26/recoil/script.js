const select = (target) => document.querySelector(target);
const selectAll = (target) => document.querySelectorAll(target);

const nav = select('.top');
const background = select('.dropdownBackground');

function delay(timer, func) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(func()), timer);
  });
}

function onMouseenter({ target }) {
  target.classList.add('trigger-enter');
  delay(150, () => {
    target.classList.contains('trigger-enter') && target.classList.add('trigger-enter-active');
  })
    .then(() => background.classList.add('open'))
    .then(() => {
      const dropdown = target.querySelector('.dropdown');
      const boundingRect = dropdown.getBoundingClientRect();
      const navBoundingRect = nav.getBoundingClientRect();
      return {
        width: boundingRect.width,
        height: boundingRect.height,
        left: boundingRect.left - navBoundingRect.left,
        top: boundingRect.top - navBoundingRect.top,
      };
    })
    .then(({ width, height, left, top }) => {
      background.style.setProperty('width', `${width}px`);
      background.style.setProperty('height', `${height}px`);
      background.style.setProperty('transform', `translate(${left}px, ${top}px)`);
    });
}

function onMouseLeave({ target }) {
  target.classList.remove('trigger-enter', 'trigger-enter-active');
  background.classList.remove('open');
}

window.addEventListener('DOMContentLoaded', () => {
  const items = selectAll('.cool > li');
  items.forEach((item) => {
    item.addEventListener('mouseenter', onMouseenter);
    item.addEventListener('mouseleave', onMouseLeave);
  });
});
