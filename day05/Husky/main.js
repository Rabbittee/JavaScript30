const titles = ['我妻善逸', '竈門禰豆子', '竈門炭治郎', '嘴平伊之助'];

const app = document.getElementById('app');
app.classList.add('flex', 'w-full');
const titlesDom = titles.map((title, index) => {
  const div = document.createElement('div');
  div.classList.add(
    ...[
      'panel',
      `panel${index + 1}`,
      'w-full',
      `before:bg-cover`,
      `before:bg-left`,
      `before:grayscale`,
    ]
  );

  const p = document.createElement('p');
  // p.innerText = '';
  p.style.backgroundImage = `url(./images/${title}.png)`;
  div.appendChild(p);

  app.appendChild(div);
  return div;
});

console.log(titlesDom);
