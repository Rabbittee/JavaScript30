// ## Array Cardio Day 2
var people = [
    { name: "Wes", year: 1988 },
    { name: "Kait", year: 1986 },
    { name: "Irv", year: 1970 },
    { name: "Lux", year: 2015 },
];
var comments = [
    { text: "Love this!", id: 523423 },
    { text: "Super good", id: 823423 },
    { text: "You are the best", id: 2039842 },
    { text: "Ramen is my fav food ever", id: 123523 },
    { text: "Nice Nice Nice!", id: 542328 },
];
var describe = function (title, fn) {
    console.group(title);
    console.table(fn());
    console.groupEnd();
};
var orderThan = function (year) { return function (people) {
    return people.year >= year;
}; };
describe("is at least one person 19 or older?", function () {
    return people.some(orderThan(19));
});
describe("is everyone 19 or older?", function () {
    return people.every(orderThan(19));
});
var byID = function (id) { return function (comment) { return comment.id === id; }; };
var not = function (fn) { return function (arg) { return !fn(arg); }; };
describe("find the comment with the ID of 823423", function () {
    return comments.find(byID(823423));
});
describe("Find and delete the comment with the ID of 823423", function () {
    return comments.filter(not(byID(823423)));
});
