const pressed = [];
const secretCode = 'kimkim';
window.addEventListener('keyup', (e) => {
  pressed.push(e.key);
  const pressedLength = pressed.length;
  const secretCodeLength = secretCode.length;

  // splice(start, deleteCount)
  pressed.splice(-pressedLength - 1, pressedLength - secretCodeLength);

  // 拆解前半段: splice(start)
  console.log(
    '如果為負數，它將從數位的末尾開始',
    -secretCodeLength - 1,
    '且length - 1 為陣列的最後一個'
  ); // -7

  // 拆解後半段: splice(deleteCount)
  console.log('密碼長度為', secretCodeLength); // 6
  console.log('當前輸入幾個值', pressedLength); // 當前輸值為：輸入一次為 1, 輸入兩次為 2
  console.log(
    '如果為 或為負數，則不刪除任何元素, 否則刪除',
    pressedLength - secretCodeLength,
    '個元素'
  );

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
