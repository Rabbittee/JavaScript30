const root = document.documentElement;
const setRootStyle = style(root);
const $ = (target) => document.querySelectorAll(target);

function style(node){
  return function(propName,val){
    node.style.setProperty(propName, val);
  }
}

function watchInputEffect(node) {
  node.addEventListener("change", ({ target })=>{
    const sizing = target.dataset?.sizing ?? "";
    setRootStyle(`--${target.name}`,target.value + sizing)
  });

  node.addEventListener("mousedown", ({ target })=>{
    const sizing = target.dataset?.sizing ?? "";
    setRootStyle(`--${target.name}`, target.value + sizing)
  });
}

function handleInputEffect(nodes) {
  nodes.forEach(function (node) {
    const sizing = node.dataset?.sizing ?? "";
    setRootStyle(`--${node.name}`, node.value + sizing);//init root style
    watchInputEffect(node);
  });
}

const inputs = $(".controls > input");
handleInputEffect(inputs);
