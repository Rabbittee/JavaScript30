/*
 * @Author:Claire Li
 * @Date:2022-02-23 22:41:13
 * @LastEditors:Claire Li
 * @LastEditTime:2022-02-23 23:54:48
 * @Description:
 */
const select = (query: string): HTMLElement | null => document.querySelector<HTMLElement>(query);
const hero: HTMLElement | null = select('.hero');
const title: HTMLElement | null = select('h1');
const distance: number = 500;

const moveShadow = (e: MouseEvent): void => {
  if (!hero || !e) throw new Error('element is null');

  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  const target = e.target as HTMLElement;
  x = x + target.offsetLeft;
  y = y + target.offsetTop;

  const xMove = Math.round((x / width) * distance - distance / 2);
  const yMove = Math.round((y / height) * distance - distance / 2);

  if (!title) throw new Error('title is null');

  title.style.textShadow = `
    ${xMove}px ${yMove}px 0 rgba(255,0,255,0.7),
    ${xMove * -1}px ${yMove}px 0 rgba(0,255,255,0.7),
    ${yMove}px ${xMove * -1}px 0 rgba(0,255,0,0.7),
    ${yMove * -1}px ${xMove}px 0 rgba(0,0,255,0.7)
  `;
};

hero?.addEventListener('mousemove', moveShadow);
