const select = (selector) => document.querySelector(selector);
const checkboxSelector = 'input[type="checkbox"]';

function holdShiftToCheckCheckboxes(selector = '#checklist') {
  const form = select(selector);
  const checkboxes = [...form.querySelectorAll(checkboxSelector)];
  let prevCheckedIndex = null;
  let isPressShift = false;

  function checkInRange(from = 0, to = 0) {
    const minOne = Math.min(from, to);
    const maxOne = Math.max(from, to);
    console.log(minOne, maxOne);
    checkboxes.forEach((checkbox, i) => {
      if (i >= minOne && i <= maxOne) checkbox.checked = true;
    });
  }

  function findCheckboxIndex(currentCheckbox) {
    return checkboxes.findIndex((checkbox) => checkbox === currentCheckbox);
  }

  function toggleIsPressShift(forceState) {
    isPressShift = !!forceState ?? !isPressShift;
  }

  form.addEventListener('change', (e) => {
    const currentCheckbox = e.target.closest(checkboxSelector);
    const currentCheckedIndex = findCheckboxIndex(currentCheckbox);
    if (isPressShift && typeof prevCheckedIndex === 'number') {
      checkInRange(currentCheckedIndex, prevCheckedIndex);
    }
    prevCheckedIndex = currentCheckedIndex;
    console.log(prevCheckedIndex, isPressShift);
  });

  document.addEventListener('keydown', ({ key }) => {
    if (key === 'Shift') toggleIsPressShift(true);
  });

  document.addEventListener('keyup', ({ key }) => {
    if (key === 'Shift') toggleIsPressShift(false);
  });
}

holdShiftToCheckCheckboxes();
