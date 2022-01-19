import './style.css';
import './src/header';

const selectAll = (element) => document.querySelectorAll(element);

const toggleOpen = (e) => {
  const current = e.target;
  current.classList.toggle('open');
};

const toggleText = (e) => {
  const current = e.target;
  if (current.tagName !== 'DIV') return 
  if (current.classList.contains('open')) {
    current.classList.add('open-text')
  } else {
    current.classList.remove('open-text')
  }
};

selectAll('.panel').forEach((panel) => panel.addEventListener('click', toggleOpen));
selectAll('.panel').forEach((panel) => panel.addEventListener('transitionend', toggleText));

