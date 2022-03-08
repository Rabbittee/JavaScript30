const $ = (target) => document.querySelector(target);
const triggers = document.querySelectorAll('a');
$('nav').insertAdjacentHTML('beforebegin', `<span class="highlight" style="display:none;"></span>`);

triggers.forEach((el) => {
  el.addEventListener('mouseenter', handleEnter);
});

function handleEnter({ target }) {
  setPosition(target.getBoundingClientRect());
}

function setPosition(target) {
  const { top, left, width, height } = target;
  const { scrollX, scrollY } = window;
  $('.highlight').style.display = '';
  $('.highlight').style.width = `${width}px`;
  $('.highlight').style.height = `${height}px`;
  $('.highlight').style.transform = `translate(${left + scrollX}px, ${top + scrollY}px)`;
}
