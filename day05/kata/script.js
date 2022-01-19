const panels = document.querySelector('.panels');
const toggleElementClass = (element, className) => element.classList.toggle(className);

panels.addEventListener('click', ({ target }) => toggleElementClass(target.closest('div'), 'open'));

panels.addEventListener(
  'transitionend',
  ({ target, propertyName }) =>
    propertyName.includes('flex') && toggleElementClass(target.closest('div'), 'active')
);
