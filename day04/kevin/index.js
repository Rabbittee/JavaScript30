// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
];

const people = [
  'Bernhard, Sandra',
  'Bethea, Erin',
  'Becker, Carl',
  'Bentsen, Lloyd',
  'Beckett, Samuel',
  'Blake, William',
  'Berger, Ric',
  'Beddoes, Mick',
  'Beethoven, Ludwig',
  'Belloc, Hilaire',
  'Begin, Menachem',
  'Bellow, Saul',
  'Benchley, Robert',
  'Blair, Robert',
  'Benenson, Peter',
  'Benjamin, Walter',
  'Berlin, Irving',
  'Benn, Tony',
  'Benson, Leana',
  'Bent, Silas',
  'Berle, Milton',
  'Berry, Halle',
  'Biko, Steve',
  'Beck, Glenn',
  'Bergman, Ingmar',
  'Black, Elk',
  'Berio, Luciano',
  'Berne, Eric',
  'Berra, Yogi',
  'Berry, Wendell',
  'Bevan, Aneurin',
  'Ben-Gurion, David',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bennington, Chester',
  'Bierce, Ambrose',
  'Billings, Josh',
  'Birrell, Augustine',
  'Blair, Tony',
  'Beecher, Henry',
  'Biondo, Frank',
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const q1 = inventors.filter((inventor) => inventor.year >= 1500 && inventor.year < 1600);
console.log('Q1', q1);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const q2 = inventors.map(({ first, last }) => {
  return {
    first,
    last,
  };
});
console.log('Q2', q2);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const q3 = inventors.sort((a, b) => {
  return a.year - b.year;
});
console.log('Q3', q3);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const q4 = inventors.reduce((all, { year, passed }) => {
  return all + (passed - year);
}, 0);
console.log('Q4', q4);

// 5. Sort the inventors by years lived
const getLiveYears = (person) => person.passed - person.year;
const q5 = inventors.sort((a, b) => getLiveYears(a) - getLiveYears(b));
console.log('Q5', q5);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// P A S S !

// 7. sort Exercise
// Sort the people alphabetically by last name
const compare = (a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};
const getLastName = (name = '') => name.split(', ')[1];
const q7 = people.sort((a, b) => compare(getLastName(a), getLastName(b)));
console.log('Q7', q7);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
];

const q8 = data.reduce((result, current) => {
  return {
    ...result,
    [current]: (result[current] ?? 0) + 1,
  };
}, {});
console.log('Q8', q8);
