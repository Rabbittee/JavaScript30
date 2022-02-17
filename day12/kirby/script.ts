const bingo = () => window["cornify_add"]();

const fixed = <T>(size: number) => (list: T[]) => {
  list = list.slice(0, size);

  function append(item: T) {
    if (list.length + 1 > size) list.shift();

    list.push(item);
  }

  return { append, list };
};

const word = "kirby";

const buffer = fixed(word.length)([]);

window.addEventListener("keypress", (e) => {
  if (!(e instanceof KeyboardEvent)) return;

  console.log(e.key);

  buffer.append(e.key);

  if (word === buffer.list.join("")) return bingo();

  console.log(buffer.list);
});
