const array = [];
const handleKeyDown = (e) => {
  const pushKey = e.key;
  array.push(pushKey);
  if (array.length > 6) {
    array.shift();
  }
  console.log(pushKey);
  console.log(array);
};

window.addEventListener('keydown', handleKeyDown);
