const objToString = (obj = {}) => {
  return Object.entries(obj)
    .map(([key, value]) => `${key}: ${value}`)
    .join(';');
};

const highlight = (() => {
  const highLightDiv = document.createElement('div');
  const highlightClass = 'highlight';
  let currentTarget = null;

  const isSameTarget = (node) => node === currentTarget;
  const setDivStyle = (styleString) => highLightDiv.setAttribute('style', styleString);
  const init = () => {
    // setup highlight element
    highLightDiv.classList.add(highlightClass);
    document.body.appendChild(highLightDiv);
    // create highlight element --- end
  };

  init();

  return {
    set(target) {
      if (!target || target.nodeType === undefined) return;
      if (isSameTarget(target) === true) return;
      console.log('Hello! if the triggered target has changed, you will see me');

      // store current target for next time reference
      currentTarget = target;

      // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
      const { width, height, x, y } = target.getBoundingClientRect();
      const { scrollY, scrollX } = window;

      // setup highlight element's position and size
      setDivStyle(
        objToString({
          transform: `translate( ${x + scrollX}px, ${y + scrollY}px)`,
          width: width + 'px',
          height: height + 'px',
        })
      );
    },
  };
})();

const onMouseover = (event) => {
  if (event.target.closest('a')) {
    // fire this function only if the target is a "a" element
    highlight.set(event.target.closest('a'));
  }
};

document.addEventListener('mouseover', onMouseover);
