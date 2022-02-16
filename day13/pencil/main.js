function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const selectAll = (className) => document.querySelectorAll(className);
const slideImgs = selectAll('.slide-in');

function sliderListener() {
  const scrollY = window.scrollY;
  const windowMidPosition = scrollY + window.innerHeight / 2;
  const windowBottomPosition = scrollY + window.innerHeight;
  slideImgs.forEach((img) => {
    const imgTopPosition = img.offsetTop;
    const imgMidPosition = img.offsetTop + img.offsetHeight / 2;
    const imgBottomPosition = img.offsetTop + img.offsetHeight;
    // 圖片中間位置通過畫面中線
    if (imgMidPosition <= windowMidPosition) img.classList.add('active');
    // 圖片已超出螢幕區塊
    if (scrollY > imgBottomPosition || windowBottomPosition < imgTopPosition)
      img.classList.remove('active');
  });
}

window.addEventListener('scroll', debounce(sliderListener));
