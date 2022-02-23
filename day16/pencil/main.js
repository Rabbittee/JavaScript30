'use strict';
const select = (query) => document.querySelector(query);
const hero = select('.hero');
const title = select('h1');
const DISTANCE = 500;
const moveShadow = (e) => {
  if (!hero || !e) throw new Error('element is null');
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;
  const target = e.target;
  x = x + target.offsetLeft;
  y = y + target.offsetTop;
  const xMove = Math.round((x / width) * DISTANCE - DISTANCE / 2);
  const yMove = Math.round((y / height) * DISTANCE - DISTANCE / 2);
  if (!title) throw new Error('title is null');
  title.style.textShadow = `
    ${xMove}px ${yMove}px 0 rgba(255,0,255,0.7),
    ${xMove * -1}px ${yMove}px 0 rgba(0,255,255,0.7),
    ${yMove}px ${xMove * -1}px 0 rgba(0,255,0,0.7),
    ${yMove * -1}px ${xMove}px 0 rgba(0,0,255,0.7
  `;
};
hero === null || hero === void 0 ? void 0 : hero.addEventListener('mousemove', moveShadow);
