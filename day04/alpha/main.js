// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1
import { inventors } from './src/inventors.js';
import { people } from './src/people.js';
import { data } from './src/data.js';

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter(({ year }) => year >= 1500 && year < 1600);

console.log(`1. Filter the list of inventors for those who were born in the 1500's`);
console.table(fifteen);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const arrayGroupByName = inventors.map(({ first, last }) => {
  return { first, last };
});

console.log(`2. Give us an array of the inventors first and last names`);
console.table(arrayGroupByName);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const arraySortByBirsdate = inventors.sort((a, b) => {
  return a.year - b.year;
});

console.log(`3. Sort the inventors by birthdate, oldest to youngest`);
console.table(arraySortByBirsdate);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const totalLiveYears = inventors.reduce((total, { year, passed }) => {
  return total + (passed - year);
}, 0);

console.log(`4. How many years did all the inventors live all together?`);
console.log(`total live years: ${totalLiveYears} years`);

// 5. Sort the inventors by years lived
const sortByLivedYears = inventors.sort((a, b) => {
  const diff = (e) => e.passed - e.year;
  return diff(a) - diff(b);
});

console.log(`5. Sort the inventors by years lived`);
console.table(sortByLivedYears);
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

console.log(`6. skip`);

// 7. sort Exercise
// Sort the people alphabetically by last name
const handleSplit = (array) =>
  array.map((name) => {
    return name.trim().split(',');
  });

const sortByAlphabet = handleSplit(people).sort((a, b) => {
  const [aLastName, aFirstName] = a;
  const [bLastName, bFirstName] = b;
  return aLastName > bLastName ? 1 : -1;
});

console.log(`7. sort Exercise`);
console.table(sortByAlphabet);

// 8. Reduce Exercise
// Sum up the instances of each of these

const formatedData = data.reduce((obj, item) => {
  obj[item] = obj[item] ? obj[item] + 1 : 1;
  return obj;
}, {});
console.table(formatedData);
