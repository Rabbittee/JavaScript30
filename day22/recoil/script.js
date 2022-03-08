const selectAll = (target) => document.querySelectorAll(target);
const select = (target) => document.querySelector(target);

const tagSeries = selectAll('a');
const tags = Array.from(tagSeries);
const highlight = document.createElement('span');

function initHighLight() {
  const [tag] = tags;

  highlight.classList.add('highlight');
  highlight.style.width = `${tag.clientWidth}px`;
  highlight.style.height = `${tag.clientHeight}px`;
  highlight.style.transform = `translate(${tag.offsetLeft}px, ${tag.offsetTop}px)`;
  document.body.appendChild(highlight);
}

function handleHighLight(e) {
  const rect = e.target.getBoundingClientRect();

  highlight.style.width = `${rect.width}px`;
  highlight.style.height = `${rect.height}px`;
  highlight.style.transform = `translate(${rect.left}px, ${rect.top}px)`;
}

document.addEventListener('DOMContentLoaded', initHighLight);

tags.forEach((tag) => {
  tag.addEventListener('mouseenter', handleHighLight);
});
