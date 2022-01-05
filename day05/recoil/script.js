const $ = (target) => document.querySelectorAll(target);

const panels = $(".panel");

function Elements(list) {
  return function (className) {
    list.forEach(function (node) {
      node.classList.remove(className);
    });
  };
}

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
});
