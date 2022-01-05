const panels = document.querySelectorAll(".panels div");

panels.forEach((el) => {
  // 監聽按下
  el.addEventListener("click", clickToggle);
});

panels.forEach((el) => {
  // 監聽動畫結束
  el.addEventListener("transitionend", subtitleTransition);
});

// 展開收合 card ( toggle 自動切換)
function clickToggle() {
  this.classList.toggle("open");
}

// class 包不包含 open 決定 open-active 的去留
function subtitleTransition() {
  if (this.classList.contains("open")) this.classList.add("open-active");
  else this.classList.remove("open-active");
}
