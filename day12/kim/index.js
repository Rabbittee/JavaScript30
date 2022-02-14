const pressed = [];
const secretCode = 'kimkim';
window.addEventListener('keyup', (e) => {
  console.log(e.key);
  pressed.push(e.key);

  // splice(start, deleteCount)
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  console.log(-secretCode.length - 1); // -7
  console.log(pressed.length); // 輸入一次為1, 輸入兩次為2
  console.log(secretCode.length); // 6

  if (pressed.join('').includes(secretCode)) {
    console.log('DING DING!');
    cornify_add();
  }
  console.log(pressed);
  render(pressed);
});

function render(answer) {
  const container = document.querySelector('.container');
  container.innerHTML += `<div><pre>${JSON.stringify(answer)}</pre></div>`;
}
