const root = document.documentElement;
const setRootStyle = style(root);
const $ = (target) => document.querySelectorAll(target);
const inputs = $(".controls > input");

function style(node) {
  return function (propName, val) {
    node.style.setProperty(propName, val);
  };
}

function initStyleEffect(node){
  const unit = node.dataset?.sizing ?? "";
  setRootStyle(`--${node.name}`, node.value + unit);
}

function watchInputEffect(node) {
  node.addEventListener("change", ({ target }) => {
    const unit = target.dataset?.sizing ?? "";
    setRootStyle(`--${target.name}`, target.value + unit);
  });

  node.addEventListener("mousemove", ({ target }) => {
    const unit = target.dataset?.sizing ?? "";
    setRootStyle(`--${target.name}`, target.value + unit);
  });
}

inputs.forEach(function (node) {
  initStyleEffect(node);
  watchInputEffect(node);
});
