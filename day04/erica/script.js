import { render } from './utils.js'
import * as datum from './data.js';
const { inventors, people, data } = datum;

// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Array.prototype.filter()
(function () {
  const title = `1. Filter the list of inventors for those who were born in the 1500's`;
  const answer = inventors.filter((inventor) => String(inventor.year).slice(0, 2).match(15));
  render(title, answer);
})();

// Array.prototype.map()
(function () {
  const title = `2. Give us an array of the inventors first and last names`;
  const answer = inventors.map((inventor) => `${inventor.first} ${inventor.last}`);
  render(title, answer);
})();

// Array.prototype.sort()
(function () {
  const title = `3. Sort the inventors by birthdate, oldest to youngest`;
  const answer = inventors.sort((a, b) => a.year - b.year);
  render(title, answer);
})();

// Array.prototype.reduce()
(function () {
  const title1 = `4. How many years did all the inventors live?`;
  const title2 = `5. Sort the inventors by years lived`;

  const totalYears = inventors.reduce(
    (total, inventor) => total + (inventor.passed - inventor.year),
    0
  );

  const sortAge = inventors
    .reduce((acc, curr) => {
      const livedYears = curr.passed - curr.year;
      acc.push({
        name: `${curr.first} ${curr.last}`,
        years: `${curr.year} - ${curr.passed}`,
        age: livedYears,
      });
      return acc;
    }, [])
    .sort((a, b) => b.age - a.age);

  render(title1, `total ${totalYears} years`);
  render(title2, sortAge);
})();

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// 7. sort Exercise
(function () {
  const title = `7. Sort the people alphabetically by last name`;
  const answer = people.sort((a, b) => {
    const nameStr = (name) => name.split(', ')[1].toLowerCase();
    return nameStr(a) > nameStr(b) ? 1 : -1;
  });
  render(title, answer);
})();

// 8. Reduce Exercise
(function () {
  const title = `8. Sum up the instances of each of these`;
  const answer = data.reduce((acc, curr) => {
    if (acc[curr] === undefined) acc[curr] = 0;
    acc[curr]++;
    return acc;
  }, {});
  render(title, answer);
})();

