const select = (DOM) => document.querySelector(DOM);

let topOfNav = select('#main').offsetTop;

const scrollListener = () => {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = select('#main').offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0;
  }
};

window.addEventListener('scroll', scrollListener);
