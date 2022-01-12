const controls = document.querySelectorAll('.controls input');

controls.forEach((el) => {
  // 監聽變化
  el.addEventListener('change', cssStyle);
});

function cssStyle() {
  const styleVal = this.dataset.sizing ? this.dataset.sizing : '';
  // 修改 css 變量
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + styleVal
  );
}
