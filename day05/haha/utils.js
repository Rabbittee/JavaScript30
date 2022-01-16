const panels = document.querySelector('.panels');

panels.addEventListener('click', clickPanel, false);
panels.addEventListener('transitionend', expandPanel, false);

// 展開收合 card，添加 open class
function clickPanel({ target }) {
  selectNode(target).classList.toggle('open');
}

// card 展開，才添加 open-active class
function expandPanel(e) {
  if (e.propertyName !== 'font-size') return;
  selectNode(e.target).classList.toggle('open-active');
}
