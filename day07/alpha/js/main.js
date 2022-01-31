import { people } from '../src/people.js';
import { comments } from '../src/comments.js';
// ## Array Cardio Day 2

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// Array.prototype.every() // is everyone 19 or older?
/**
 *
 */

const currentYear = new Date().getFullYear();

const isAult = people.some((person) => currentYear - person.year >= 19);
console.log(isAult);

const allAults = people.every((person) => currentYear - person.year >= 19);
console.log(allAults);
// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const targetID = 823423;
const findComment = comments.find((comment) => comment.id === targetID);
console.log(findComment);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const deleteComment = (comments, target) => {
  const index = comments.findIndex((comment) => comment.id === target);
  comments.splice(index, 1);
  return comments;
};

const result = deleteComment(comments, targetID);
console.table(result);
