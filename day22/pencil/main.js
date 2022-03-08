const selectAll = (DOM) => document.querySelectorAll(DOM);
const createDom = (DOM) => document.createElement(DOM);

const targetArr = selectAll('a');
const highlight = createDom('span');
highlight.classList.add('highlight');
document.body.appendChild(highlight);

function highlightLink(e) {
  const linkColors = e.target.getBoundingClientRect();

  const targetDom = {
    width: linkColors.width,
    height: linkColors.height,
    top: linkColors.top + window.scrollY,
    left: linkColors.left + window.scrollX,
  };

  highlight.style.width = `${targetDom.width}px`;
  highlight.style.height = `${targetDom.height}px`;
  highlight.style.transform = `translate(${targetDom.left}px, ${targetDom.top}px)`;
}

targetArr.forEach((target) => {
  target.addEventListener('mouseenter', highlightLink);
});
