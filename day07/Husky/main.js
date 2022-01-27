var people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];
var comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 },
];
var CheckType;
(function (CheckType) {
  CheckType[(CheckType['Some'] = 0)] = 'Some';
  CheckType[(CheckType['Every'] = 1)] = 'Every';
})(CheckType || (CheckType = {}));
function isAdult(people, adult, checkType) {
  var now = new Date();
  var checkOne = function (row) {
    return now.getFullYear() - row.year >= adult;
  };
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
function getComment(comments, id) {
  return comments.find(function (comment) {
    return comment.id === id;
  });
}
console.table([getComment(comments, 823423)]);
// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
function removeComment(comments, id) {
  var index = comments.findIndex(function (comment) {
    return comment.id === id;
  });
  comments.splice(index, 1);
  return comments;
}
console.table(removeComment(comments, 823423));
