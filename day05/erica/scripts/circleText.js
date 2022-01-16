(function () {
  const circleText = document.querySelector('.circle-text');
  const { size, text, font } = circleText.dataset;
  document.documentElement.style.setProperty('--size', size + 'px');
  document.documentElement.style.setProperty('--font', font + 'px');

  Array.from(text).forEach((word, index) => {
    const str = document.createElement('span');
    const unit = Math.floor(360 / text.length);
    circleText.appendChild(str);
    str.textContent = word;
    str.style.transform = `translateX(-50%) rotate(${unit * (index + 1)}deg)`;
  });
})();
