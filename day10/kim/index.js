const checkboxs = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheckout(e) {
  // Check if they had the shift key down
  // And check that they are checking it
  // console.log(e)
  if (e.shiftKey && this.checked) {
    let inBetween = false;
    checkboxs.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = checkBoxes[index];
}

checkboxs.forEach((checkbox) => checkbox.addEventListener('click', handleCheckout));
