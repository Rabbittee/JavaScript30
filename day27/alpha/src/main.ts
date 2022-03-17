import './style.css';

const select = <T extends HTMLElement>(query: string) => document.querySelector<T>(query);

type StateType = {
  isDown: boolean;
  startX: number;
  scrollLeft: number;
};

const state: StateType = {
  isDown: false,
  startX: 0,
  scrollLeft: 0,
};

const slider = select('.items');

function addActive(event: MouseEvent) {
  if (!slider) throw new Error('element is null');

  state.isDown = true;
  slider.classList.add('active');
  state.startX = event.pageX - slider.offsetLeft;
  state.scrollLeft = slider.scrollLeft;
}

function removeActive() {
  state.isDown = false;
  slider?.classList.remove('active');
}

function onMove(event: MouseEvent) {
  if (!state.isDown || !slider) return;
  event.preventDefault();

  //set move value
  const x = event.pageX - slider.offsetLeft;
  const walk = (x - state.startX) * 2;
  slider.scrollLeft = state.scrollLeft - walk;
}

slider?.addEventListener('mousedown', addActive);
slider?.addEventListener('mouseup', removeActive);
slider?.addEventListener('mouseleave', removeActive);
slider?.addEventListener('mousemove', onMove);
