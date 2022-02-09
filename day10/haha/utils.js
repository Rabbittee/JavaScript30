const checkboxes = document.querySelectorAll('input[type="checkbox"]');
console.log(checkboxes);

let lastIdx = 0;
let firstIdx = 0;
let startClick = false;
let inBetween = false;

checkboxes.forEach((checkbox, index) => {
  checkbox.addEventListener('click', (e) => handleClick(e, index));
});

function handleClick({ shiftKey }, index) {
  if (!startClick && shiftKey) {
    firstIdx = index;
    startClick = true;
    inBetween = true;
    console.log('first click', firstIdx, lastIdx);
  }
  if (inBetween) {
    console.log('end', firstIdx);
    for (let i = firstIdx; i <= index; i++) {
      console.log('index checked', i);
      checkboxes[i].checked = true;
    }
  }
}
