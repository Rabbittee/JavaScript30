function select(className) {
  return document.querySelectorAll(`${className}`);
}

function toggleStatus(e) {
  const panelElement = e.target.parentNode;
  const statusOpen = panelElement.classList.contains('open');

  if (statusOpen) {
    panelElement.classList.remove('open');
    return;
  }

  panelElement.classList.add('open');
}

select('.panels').forEach((element) => {
  element.addEventListener('click', toggleStatus);
});
