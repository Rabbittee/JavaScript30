const select = (target) => document.querySelector(target);

const items = select('.items');

function state(status) {
  return {
    watch: (func) => func(status),
  };
}

state({ dragging: false, position: 0, scrollLeft: 0 }).watch((status) => {
  items.addEventListener('mousedown', (e) => {
    status.dragging = true;
    items.classList.add('active');
    status.position = e.pageX - items.offsetLeft;
    status.scrollLeft = items.scrollLeft;
  });

  items.addEventListener('mouseup', ({ target }) => {
    status.dragging = false;
    items.classList.remove('active');
  });

  items.addEventListener('mouseleave', ({ target }) => {
    status.dragging = false;
    items.classList.remove('active');
  });

  items.addEventListener('mousemove', (e) => {
    if (!status.dragging) return;
    e.preventDefault();
    items.scrollLeft = status.scrollLeft - (e.pageX - items.offsetLeft - status.position) * 3;
  });
});
