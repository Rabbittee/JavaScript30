document.querySelector('.panels').addEventListener('click', (e) => {
  const clickedPanel = e.target.closest('.panel');
  const hasOpened = clickedPanel.classList.contains('open');

  const transitionHandler = () => {
    clickedPanel.classList.toggle('active', !hasOpened);
    clickedPanel.removeEventListener('transitionend', transitionHandler);
  };

  clickedPanel.classList.toggle('open');
  clickedPanel.addEventListener('transitionend', transitionHandler);
});
