const li = document.querySelectorAll('li');

const seconds = (time) => {
  const [min, sec] = time.split(':');
  return min * 60 + sec * 1;
};

const allSeconds = [...li]
  .map((el) => el.dataset.time)
  .map((el) => seconds(el))
  .reduce((pre, next) => pre + next, 0);

const hr = Math.floor(allSeconds / 3600);
console.log('🚀 ~ file: utils.js ~ line 16 ~ hr', hr);
const min = Math.floor((allSeconds - hr * 3600) / 60);
console.log('🚀 ~ file: utils.js ~ line 18 ~ min', min);
const sec = Math.floor(allSeconds - hr * 3600 - min * 60);
console.log('🚀 ~ file: utils.js ~ line 20 ~ sec', sec);
