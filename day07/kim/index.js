// ## Array Cardio Day 2

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

// Render
function render(title, answer) {
  const container = document.querySelector('.container');
  container.innerHTML += `<h2> ${title} </h2>`;
  container.innerHTML += `<p><pre> ${JSON.stringify(answer)}</pre> </p>`;
}

// Now Year
function date() {
  const date = new Date();
  return (nowYear = date.getFullYear());
}

// 1. Array.prototype.some() // is at least one person 19 or older?
const person = people.some((person) => {
  date();
  return nowYear - person.year >= 19;
});
render('1. is at least one person 19 or older?', person);

// 2. Array.prototype.every() // is everyone 19 or older?
const howOld = people.every((year) => {
  date();
  return nowYear - year.year >= 19;
});
// console.log('2. is everyone 19 or older?', howOld);
render('2. is everyone 19 or older?', howOld);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const find = comments.find((onePerson) => {
  return onePerson.id === 823423;
});
render('3. find the comment with the ID of 823423', find);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

function q4() {
  // 找到值
  const findIndex = comments.findIndex((index) => {
    return index.id === find.id;
  });
  // 刪除值
  comments.splice(findIndex, 1);
  render('4. delete the comment with the ID of 823423', comments);
}
q4();
