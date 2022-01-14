// 取得 img 節點
function getDom(el) {
  return document.querySelector(el);
}

// 產生特效
function effect(spacing, blur, color) {
  // 間距
  function useSpacing(num) {
    getDom("img").style.border = `${num}px solid`;
  }

  // 模糊化
  function useBlur(num) {
    getDom("img").style.filter = `blur(${num}px)`;
  }

  // 背景填色 + "JS" 字樣換色
  function useBgcolor(color) {
    getDom("img").style.borderColor = color;
    getDom(".hl").style.color = color;
  }

  useSpacing(spacing);
  useBlur(blur);
  useBgcolor(color);
}

function init() {
  const spacing_val = getDom("#spacing").value;
  const blur_val = getDom("#blur").value;
  const color_val = getDom("#base").value;

  effect(spacing_val, blur_val, color_val);
}

init(); // 進入頁面帶入預設值效果

window.addEventListener("input", init);
