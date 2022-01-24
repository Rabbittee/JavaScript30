const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 },
];

const adult = 19;
const survive = ({ year }) => new Date().getFullYear() - year;

const someAdult = people.some((el) => survive(el) >= adult);
console.log('is at least one person 19 or older?', someAdult);

const everyoneAdult = people.every((el) => survive(el) >= adult);
console.log('is everyone 19 or older?', everyoneAdult);

const ID = 823423;
const sameID = ({ id }) => id === ID;

const findID = comments.find((el) => sameID(el));
console.log('🚀 ~ findID', findID);

const findIdx = comments.findIndex((el) => sameID(el));
console.log('🚀 ~ findIdx', findIdx);

const answers = [
  {
    title: 'Q1: Is at least one person 19 or older?',
    subtitle: 'Array.prototype.some()',
    answer: someAdult,
  },
  {
    title: 'Q2: Is everyone 19 or older?',
    subtitle: 'Array.prototype.every()',
    answer: everyoneAdult,
  },
  {
    title: 'Q3: Find the comment with the ID of 823423',
    subtitle: 'Array.prototype.find()',
    answer: findID,
  },
  {
    title: 'Q4: Delete the comment with the ID of 823423',
    subtitle: 'Array.prototype.findIndex()',
    answer: findIdx,
  },
];

function createElement({ title, subtitle, answer }, index) {
  // const article = document.querySelector('.article')
  const div = document.createElement('div');
  div.classList.add(`box`, `box-bg-${index}`, `box-animation-${index % 2}`);
  div.innerHTML = `
    <div class="title">${title}</div>
    <div class="subtitle">${subtitle}</div>
    <div class="answer">${answer}</div>
  `;
  document.body.appendChild(div);
}

function card({ title, subtitle, answer }, index) {
  const box = document.querySelector(`.bg-${index}`);
  const div = document.createElement('div');
  const div2 = document.createElement('div');
  div.classList.add(`box`, `box-bg-${index}`, `box-animation-${index % 2}`);
  div2.classList.add(`box-animation-${index % 2}`)
  div.innerHTML = `
    <div>${title}</div>
  `;
  div2.innerHTML = `${subtitle}`
  box.appendChild(div);
  box.appendChild(div2);
  // if (index === 1) return animationSection2();
  // if (index === 3) return animationSection4();
}

(function () {
  createSection(); // 新增 section
  answers.forEach((el, index) => card(el, index));
})();

function createSection() {
  const div = document.createElement('div');
  div.classList.add('container');
  div.innerHTML = `
  <section class="bg bg-0"></section>
  <section class="bg bg-1"></section>
  <section class="bg bg-2"></section>
  <section class="bg bg-3"></section>
  `;
  document.body.appendChild(div);
}

function animationSection2() {
  const select = document.querySelector('.bg-1');
  const img = document.createElement('img');
  img.classList.add('bg-shacking');
  img.src = './assets/jump.png';
  select.appendChild(img);
}

function animationSection4() {
  const select = document.querySelector('.bg-3');
  const img = document.createElement('img');
  img.classList.add('bg-shacking');
  img.src = './assets/stupid.png';
  select.appendChild(img);
}
