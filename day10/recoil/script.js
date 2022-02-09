const selector = (target) => document.querySelector(target);
const selectorAll = (target) => document.querySelectorAll(target);
const toDos = selector('.inbox');
const checkboxes = selectorAll("input[type='checkbox']");

let lastChecked;

function handleCheckBox(event) {
  let inBetween = false;
  if (!event.shiftKey && event.target.checked) {
    lastChecked = event.target;
  }
  if (event.shiftKey && event.target.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox === event.target || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });

    lastChecked = event.target;
  }
}
function setAllCheckBox(bool) {
  checkboxes.forEach((checkbox) => (checkbox.checked = bool));
}

toDos.addEventListener('click', handleCheckBox);
selector("button[name='removeAll']").addEventListener('click', () => setAllCheckBox(false));
selector("button[name='selectAll']").addEventListener('click', () => setAllCheckBox(true));
