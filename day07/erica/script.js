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

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// Array.prototype.every() // is everyone 19 or older?

const answer1 = people.some((person) => 2022 - person.year >= 19);
const answer2 = people.every((person) => 2022 - person.year >= 19);

console.table('Q1: ', answer1);
console.table('Q2: ', answer2);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const answer3 = comments.find((obj) => obj.id === 823423);
console.table('Q3: ', answer3);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const index = comments.findIndex((obj) => obj.id === 823423);
comments.splice(index, 1);
const answer4 = comments;
console.table(answer4);
