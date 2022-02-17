const imgs = document.querySelectorAll('.slide-in');

function activeImage() {
  // 底部位置 = 視窗內高度+滑鼠移動Y軸
  const windownBottom = window.scrollY + window.innerHeight;

  imgs.forEach((height) => {
    // offsetTop: 元素的顶部内边距的距离
    const distanceWithTop = height.offsetTop;
    //
    if (windownBottom >= distanceWithTop) {
      height.classList.add('active');
    } else if (windownBottom < distanceWithTop) {
      height.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', activeImage);
window.addEventListener('scroll', debounce(activeImage));

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
