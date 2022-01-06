const $ = (target) => document.querySelectorAll(target);

function Elements(list) {
  return function (className) {
    list.forEach(function (node) {
      node.classList.remove(className);
    });
  };
}

const panels = $(".panel");
const removeAllPanelClass = Elements(panels);

panels.forEach(function (element) {
  element.addEventListener("click", function (e) {
    if (e.target.classList.contains("open")) {
      e.target.classList.remove("open");
    } else {
      removeAllPanelClass("open");
      e.target.classList.add("open");
    }
  });
  element.addEventListener("transitionend",function(e){
    if (e.target.classList.contains("open"))e.target.classList.add("open-active");
    else e.target.classList.remove("open-active");
  })
});