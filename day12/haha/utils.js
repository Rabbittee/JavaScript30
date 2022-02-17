const keyWord = 'haha';
const container = document.querySelector('h1');
const pressed = [];

window.addEventListener('keyup', ({ key }) => {
  const regex = /^(\w)$/.test(key);
  if (!regex) return;
  pressed.push(key);
  if (pressed.join('').includes(keyWord)) return handleBingo();
  if (pressed.length > keyWord.length) pressed.shift();
  enterText();
});

function enterText() {
  container.innerHTML = '';
  pressed.forEach((el) => (container.innerHTML += `<span>${el}</span>`));
}

function handleBingo() {
  container.innerHTML = '<span>B</span><span>I</span><span>N</span><span>G</span><span>O</span>';
  cornify_add();
}
