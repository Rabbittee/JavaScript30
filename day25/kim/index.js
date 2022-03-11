const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

// bubbling
function logText(e) {
  console.log(this.classList.value);
  e.stopPropagation(); // stop bubbling!
}

// capture
divs.forEach((div) =>
  div.addEventListener('click', logText, {
    capture: false,
    once: true,
  })
);

button.addEventListener(
  'click',
  () => {
    console.log('click');
  },
  {
    once: true,
  }
);
