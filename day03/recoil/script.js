const root = document.documentElement;

const $ = (target) => document.querySelectorAll(target);

function handleValue(target) {
  const sizing = target.dataset?.sizing ?? "";
  return target.value + sizing;
}

function handleUpdate({ target }) {
  root.style.setProperty(`--${target.name}`, handleValue(target));
}

function init(nodes) {
  nodes.forEach(function (target) {
    root.style.setProperty(`--${target.name}`, handleValue(target));
  });
  return nodes;
}

function watch(nodes) {
  nodes.forEach(function (node) {
    node.addEventListener("change", handleUpdate);
    node.addEventListener("mousemove", handleUpdate);
  });
  return nodes;
}

const inputs = $(".controls > input");

function run() {
  Promise.resolve(inputs).then(init).then(watch);
}
run();