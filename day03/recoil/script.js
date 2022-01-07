const root = document.documentElement;

const $ = (target) => document.querySelectorAll(target);

function handleValue(target) {
  const sizing = target.dataset?.sizing ?? "";
  return target.value + sizing;
}


function watchInputEffect(rootNode, node) {
  node.addEventListener("change", ({ target })=>{
    rootNode.style.setProperty(`--${target.name}`, handleValue(target));
  });
  node.addEventListener("mousedown", ({ target })=>{
    rootNode.style.setProperty(`--${target.name}`, handleValue(target));
  });
}

function handleInputEffect(documentEl, nodes) {
  nodes.forEach(function (node) {
    documentEl.style.setProperty(`--${node.name}`, handleValue(node));
    watchInputEffect(documentEl,node);
  });
}

const inputs = $(".controls > input");
handleInputEffect(root, inputs);
