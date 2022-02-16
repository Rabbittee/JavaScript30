/*
 * @Author:Claire Li
 * @Date:2022-02-16 23:19:37
 * @LastEditors:Claire Li
 * @LastEditTime:2022-02-16 23:43:13
 * @Description:
 */
const pressed = [];
const secretCode = 'abc';
const input = document.querySelector('.input');

input.addEventListener('keyup', (e) => {
  pressed.push(e.key);
  pressed.splice(-secretCode - 1, pressed.length - secretCode.length);

  if (pressed.join('').includes(secretCode)) {
    cornify_add();
    alert('Just Kidding :P ...Or Not?');
    e.target.value = '';
  }
});
