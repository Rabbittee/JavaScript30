// 要記得寫副檔名不然會讀不到
import { inventors, people, data } from './data.js';

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter((inventor) => inventor.year >= 1500 && inventor.year < 1600);

console.log('1: ', fifteen);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
// It'll create a new array
const name = inventors.map((inventor) => `${inventor.first} ${inventor.last}`);

console.log('2: ', name);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
// It wont't create a new array.
const BirthDateArr = [...inventors];

// Q: how to set the parameter to compare function？
console.log('3: ', BirthDateArr.sort(ascendingCompare));

function ascendingCompare(a, b) {
  return a.year - b.year;
}

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const years = inventors
  .map((inventor) => {
    return inventor.passed - inventor.year;
  })
  .reduce((acc, currentValue) => {
    return acc + currentValue;
  });

console.log('4: ', years);

// 5. Sort the inventors by years lived
const inventorsCp = inventors
  .map((inventor) => {
    return {
      first: inventor.first,
      last: inventor.last,
      year: inventor.passed - inventor.year,
    };
  })
  .sort(descendingCompare);

console.log('5: ', inventorsCp);

function descendingCompare(a, b) {
  return b.year - a.year;
}

// 7. sort Exercise
// Sort the people alphabetically by last name
// 把 people 用 ', ' 分開再分別存入變數裡面做比較
console.log(
  '7: ',
  people.sort(function (lastOne, currentOne) {
    const [aLast, aFirst] = lastOne.split(', ');
    const [bLast, bFirst] = currentOne.split(', ');
    return aLast > bLast ? 1 : -1;
  })
);

// 8. Reduce Exercise
// Sum up the instances of each of these
// initial value 一定要給一個空物件才有作用
const countedTransportation = data.reduce((transportation, name) => {
  if (name in transportation) {
    transportation[name]++;
  } else {
    transportation[name] = 1;
  }

  return transportation;
}, {});

console.log('8: ', countedTransportation);
