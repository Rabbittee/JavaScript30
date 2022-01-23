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
