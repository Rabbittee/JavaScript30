const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  panel.addEventListener('click', toggleOpen);
  panel.addEventListener('transitionend', toggleTransition);
});

function toggleOpen() {
  this.classList.toggle('open');
}

function toggleTransition(e) {
  // this.classList.toggle('open-active')
  if (e.propertyName.includes('flex-grow')) this.classList.toggle('open-active');
}
