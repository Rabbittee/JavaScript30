/** query selector function */
function select(className) {
  return document.querySelectorAll(`${className}`);
}

/** toggle the open class */
function toggleStatus(e) {
  const panelElement = e.target.parentNode;
  const statusOpen = panelElement.classList.contains('open');

  if (statusOpen) {
    panelElement.classList.remove('open');
    return;
  }

  panelElement.classList.add('open');
}

/** add event listeners*/
select('.panels').forEach((element) => {
  element.addEventListener('click', toggleStatus);
});
