const root = document.documentElement;
const setRootStyle = style(root);
const $ = (target) => document.querySelectorAll(target);
const inputs = $(".controls > input");

function style(node) {
  return function (propName, val) {
    node.style.setProperty(propName, val);
  };
}

function initStyleEffect({ dataset, name, value }) {
  const unit = dataset?.sizing ?? "";
  setRootStyle(`--${name}`, value + unit);
}

function watchInputEffect(node) {
  node.addEventListener("input", ({ target: { dataset, name, value } }) => {
    const unit = dataset?.sizing ?? "";
    setRootStyle(`--${name}`, value + unit);
  });
}

inputs.forEach(function (node) {
  initStyleEffect(node);
  watchInputEffect(node);
});
