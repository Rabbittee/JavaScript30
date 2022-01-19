function updateCss(id) {
  const value = document.getElementById(id).value;
  const unit = document.getElementById(id).dataset.sizing == 'px' ? 'px' : '';

  // 更新CSS變數值 此處命名與id名稱相同
  document.documentElement.style.setProperty(`--${id}`, `${value}${unit}`);
}
