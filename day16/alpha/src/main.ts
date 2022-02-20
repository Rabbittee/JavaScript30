import './style.css';

const select = <T extends HTMLElement>(query: string) => document.querySelector<T>(query);

const hero = select<HTMLElement>('.hero');
if (!hero) throw new Error('element is null');

const title = hero.querySelector('h1');

//單位位移量
const unit = 500;

function moveShadow(e: MouseEvent) {
  if (!hero || !e) throw new Error('element is null');
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  const target = <HTMLElement>e.target;
  x = x + target.offsetLeft;
  y = y + target.offsetLeft;

  const xMove = Math.round((x / width) * unit - unit / 2);
  const yMove = Math.round((y / height) * unit - unit / 2);

  if (!title) throw new Error('element is null');
  title.style.textShadow = `
  ${xMove}px ${yMove}px 0 rgba(0, 255, 255, 0.7),
  ${xMove * -1}px ${yMove}px 0 rgba(255, 0, 255, 0.7), 
  ${yMove}px ${xMove * -1}px 0 rgba(255, 255, 0, 0.7), 
  ${yMove * -1}px ${xMove}px 0 rgba(0, 0, 255, 0.7)
  `;
}

hero.addEventListener('mousemove', moveShadow);
