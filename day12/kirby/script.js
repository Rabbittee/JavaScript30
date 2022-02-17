var bingo = function () {
  return window['cornify_add']();
};
var fixed = function (size) {
  return function (list) {
    list = list.slice(0, size);
    function append(item) {
      if (list.length + 1 > size) list.shift();
      list.push(item);
    }
    return { append: append, list: list };
  };
};
var word = 'kirby';
var buffer = fixed(word.length)([]);
window.addEventListener('keypress', function (e) {
  if (!(e instanceof KeyboardEvent)) return;
  console.log(e.key);
  buffer.append(e.key);
  if (word === buffer.list.join('')) return bingo();
  console.log(buffer.list);
});
