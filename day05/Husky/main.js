const titles = [
  ['Hey', "Let's", 'Dance'],
  ['Give', 'Take', 'Receive'],
  ['Experience', 'It', 'Today'],
  ['Give', 'All', 'You can'],
];

const app = document.getElementById('app');
app.classList.add('flex', 'w-full');
const titlesDom = titles.map((title, index) => {
  const div = document.createElement('div');
  div.classList.add(...[`panel${index + 1}`, 'w-full', `bg-cover`, `bg-left`]);

  title.forEach((item) => {
    const p = document.createElement('p');
    p.innerText = item;
    div.appendChild(p);
  });

  app.appendChild(div);
  return div;
});

console.log(titlesDom);
