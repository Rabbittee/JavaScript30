const select = (selector) => document.querySelector(selector);

function StickyMenu(options = { menu: '#main' }) {
  const stickyWrapClass = 'sticky-wrap';
  const setSticky = (forceSticky) => select(options.menu).classList.toggle('sticky', forceSticky);
  const showLogo = (forceState) => {
    const hideValue = 0;
    const showValue = 500;
    select('.logo').style.maxWidth = forceState ? `${showValue}px` : `${hideValue}px`;
  };

  const wrapStickyElement = () => {
    const wrapDiv = document.createElement('div');
    wrapDiv.classList.add(stickyWrapClass);
    select(options.menu).parentNode.insertBefore(wrapDiv, select(options.menu));
    wrapDiv.appendChild(select(options.menu));
  };

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        const { height } = entry.boundingClientRect;

        if (entry.isIntersecting === true && height !== 0) {
          select(`.${stickyWrapClass}`).setAttribute('style', `height: ${height}px`);
        }

        showLogo(!entry.isIntersecting);
        setSticky(!entry.isIntersecting);
      });
    },
    {
      rootMargin: '0px',
      threshold: 1,
    }
  );

  wrapStickyElement();
  observer.observe(select(`.${stickyWrapClass}`));
}

StickyMenu();
