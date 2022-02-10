const checkboxes = document.querySelectorAll('input[type=checkbox]');

let lastChecked;

const handleCheck = (e) => {
  let inBetween = false;
  if (e.target.checked && e.shiftKey) {
    checkboxes.forEach((checkbox) => {
      if (checkbox === e.target || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = e.target;
};

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', handleCheck);
});
