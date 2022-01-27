interface People {
  name: string;
  year: number;
}

interface Comm {
  id: number;
  text: string;
}

const people: People[] = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];

const comments: Comm[] = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 },
];

enum CheckType {
  Some,
  Every,
}

function isAdult(people: People[], adult: number, checkType: CheckType) {
  const now = new Date();
  const checkOne = (row: People) => now.getFullYear() - row.year >= adult;

  if (checkType === CheckType.Some) {
    return people.some(checkOne);
  }
  return people.every(checkOne);
}

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
console.log(isAdult(people, 19, CheckType.Some));

// Array.prototype.every() // is everyone 19 or older?
console.log(isAdult(people, 19, CheckType.Every));

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
function getComment(comments: Comm[], id: number) {
  return comments.find((comment) => comment.id === id);
}
console.table([getComment(comments, 823423)]);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
function removeComment(comments: Comm[], id: number) {
  const index = comments.findIndex((comment) => comment.id === id);
  comments.splice(index, 1);
  return comments;
}
console.table(removeComment(comments, 823423));
