const array = [];
const SECRET_KEY = 'pencil';
const handleKeyDown = (e) => {
  const pressKey = e.key;
  array.push(pressKey);
  array.splice(-SECRET_KEY.length - 1, array.length - SECRET_KEY.length);
  if (array.join('').includes(SECRET_KEY)) {
    console.log('DING DING!');
    cornify_add();
  }
  console.log(pressKey);
  console.log(array);
};

window.addEventListener('keydown', handleKeyDown);
