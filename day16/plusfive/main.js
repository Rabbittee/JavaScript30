/*
 * @Author:Claire Li
 * @Date:2022-02-23 22:41:13
 * @LastEditors:Claire Li
 * @LastEditTime:2022-02-23 23:54:48
 * @Description:
 */
var select = function (query) {
  return document.querySelector(query);
};
var hero = select('.hero');
var title = select('h1');
var distance = 500;
var moveShadow = function (e) {
  if (!hero || !e) throw new Error('element is null');
  var width = hero.offsetWidth,
    height = hero.offsetHeight;
  var x = e.offsetX,
    y = e.offsetY;
  var target = e.target;
  x = x + target.offsetLeft;
  y = y + target.offsetTop;
  var xMove = Math.round((x / width) * distance - distance / 2);
  var yMove = Math.round((y / height) * distance - distance / 2);
  if (!title) throw new Error('title is null');
  title.style.textShadow = '\n    '
    .concat(xMove, 'px ')
    .concat(yMove, 'px 0 rgba(255,0,255,0.7),\n    ')
    .concat(xMove * -1, 'px ')
    .concat(yMove, 'px 0 rgba(0,255,255,0.7),\n    ')
    .concat(yMove, 'px ')
    .concat(xMove * -1, 'px 0 rgba(0,255,0,0.7),\n    ')
    .concat(yMove * -1, 'px ')
    .concat(xMove, 'px 0 rgba(0,0,255,0.7)\n  ');
};
hero === null || hero === void 0 ? void 0 : hero.addEventListener('mousemove', moveShadow);
