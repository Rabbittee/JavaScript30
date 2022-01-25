//* ## Array Cardio Day 2

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

//* Some and Every Checks
const currentYear = new Date().getFullYear();

//* Array.prototype.some() // is at least one person 19 or older?
function checkNineteen(data) {
  return data.some((element) => currentYear - element.year >= 19);
}
console.log('is at least one person 19 or older?', checkNineteen(people));

//* Array.prototype.every() // is everyone 19 or older?
function overNineteen(data) {
  return data.every((element) => currentYear - element >= 19);
}
console.log('overNineteen: ', overNineteen(people));

//* Array.prototype.find()
//* Find is like filter, but instead returns just the one you are looking for
//* find the comment with the ID of 823423
function findID(data, id) {
  const result = data.find((element) => element.id === id);
  return result;
}
console.log(findID(comments, 823423));

//* Array.prototype.findIndex()
//* Find the comment with this ID
//* delete the comment with the ID of 823423
function findPosition(data, targetID) {
  const position = data.findIndex((element) => element === targetID);
  data.forEach((element) => {
    if (element.id === targetID) data.splice(position, 1);
  });
  return data;
}
console.log(findPosition(comments, 823423));
