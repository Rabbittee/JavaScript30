// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with
const inventors = [
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 458542d (fix index.js)
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
<<<<<<< HEAD
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
=======
    { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
    { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
    { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
    { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
    { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
    { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
    { first: "Max", last: "Planck", year: 1858, passed: 1947 },
    { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
    { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
    { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
    { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
    { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
    "Bernhard, Sandra",
    "Bethea, Erin",
    "Becker, Carl",
    "Bentsen, Lloyd",
    "Beckett, Samuel",
    "Blake, William",
    "Berger, Ric",
    "Beddoes, Mick",
    "Beethoven, Ludwig",
    "Belloc, Hilaire",
    "Begin, Menachem",
    "Bellow, Saul",
    "Benchley, Robert",
    "Blair, Robert",
    "Benenson, Peter",
    "Benjamin, Walter",
    "Berlin, Irving",
    "Benn, Tony",
    "Benson, Leana",
    "Bent, Silas",
    "Berle, Milton",
    "Berry, Halle",
    "Biko, Steve",
    "Beck, Glenn",
    "Bergman, Ingmar",
    "Black, Elk",
    "Berio, Luciano",
    "Berne, Eric",
    "Berra, Yogi",
    "Berry, Wendell",
    "Bevan, Aneurin",
    "Ben-Gurion, David",
    "Bevel, Ken",
    "Biden, Joseph",
    "Bennington, Chester",
    "Bierce, Ambrose",
    "Billings, Josh",
    "Birrell, Augustine",
    "Blair, Tony",
    "Beecher, Henry",
    "Biondo, Frank",
>>>>>>> bcf2d14 (feat: 🎸 add day04 kim)
=======
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
>>>>>>> 458542d (fix index.js)
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter((inventors) => {
<<<<<<< HEAD
<<<<<<< HEAD
  return inventors.year >= 1500 && inventors.year <= 1600;
=======
    return inventors.year >= 1500 && inventors.year <= 1600;
>>>>>>> bcf2d14 (feat: 🎸 add day04 kim)
=======
  return inventors.year >= 1500 && inventors.year <= 1600;
>>>>>>> 458542d (fix index.js)
});
console.table(fifteen);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const arrayName = inventors.map((element) => {
<<<<<<< HEAD
<<<<<<< HEAD
  return element.first + ' ' + element.last;
=======
    return element.first + " " + element.last;
>>>>>>> bcf2d14 (feat: 🎸 add day04 kim)
=======
  return element.first + ' ' + element.last;
>>>>>>> 458542d (fix index.js)
});
console.table(arrayName);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
// Solution 01
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 458542d (fix index.js)
const birthdayOne = inventors.sort((a, b) => {
  if (a.year < b.year) {
    return -1;
  } else {
    return 1;
  }
<<<<<<< HEAD
});
console.table(birthdayOne);

// Solution 02
const birthdayTwo = inventors.sort((a, b) => {
  return a.year < b.year ? -1 : 1;
});
console.table(birthdayTwo);
=======
const birthday = inventors.sort((a, b) => {
    if (a.year < b.year) {
        return -1;
    } else {
        1;
    }
=======
>>>>>>> 458542d (fix index.js)
});
console.table(birthdayOne);

// Solution 02
const birthdayTwo = inventors.sort((a, b) => {
  return a.year < b.year ? -1 : 1;
});
<<<<<<< HEAD
console.table(birthday);
>>>>>>> bcf2d14 (feat: 🎸 add day04 kim)
=======
console.table(birthdayTwo);
>>>>>>> 458542d (fix index.js)

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const sum = inventors.reduce((acc, cur) => {
<<<<<<< HEAD
<<<<<<< HEAD
  const singleYear = cur.passed - cur.year;
  return (acc = acc + singleYear);
=======
    const singleYear = cur.passed - cur.year;
    return (acc = acc + singleYear);
>>>>>>> bcf2d14 (feat: 🎸 add day04 kim)
=======
  const singleYear = cur.passed - cur.year;
  return (acc = acc + singleYear);
>>>>>>> 458542d (fix index.js)
}, 0);
console.log(sum);

// 5. Sort the inventors by years lived
// Step1. Calculate years lived
const sortYear = inventors.forEach((e) => {
<<<<<<< HEAD
<<<<<<< HEAD
  const count = e.passed - e.year;
  // Step2. Create object with value
  e.HowOld = count;
});
// Step3. Sort old to young
inventors.sort(function (a, b) {
  return b.HowOld - a.HowOld;
=======
    const count = e.passed - e.year;
    // Step2. Create object with value
    e.HowOld = count;
});
// Step3. Sort old to young
inventors.sort(function (a, b) {
    return b.HowOld - a.HowOld;
>>>>>>> bcf2d14 (feat: 🎸 add day04 kim)
=======
  const count = e.passed - e.year;
  // Step2. Create object with value
  e.HowOld = count;
});
// Step3. Sort old to young
inventors.sort(function (a, b) {
  return b.HowOld - a.HowOld;
>>>>>>> 458542d (fix index.js)
});
console.table(inventors);

// 7. sort Exercise
// Sort the people alphabetically by last name
const lastName = inventors.sort(function (a, b) {
<<<<<<< HEAD
<<<<<<< HEAD
  const nameA = a.last;
  const nameB = b.last;

  // Sort A to Z
  return nameA > nameB ? 1 : -1;
=======
    const nameA = a.last;
    const nameB = b.last;

    // Sort A to Z
    return nameA > nameB ? 1 : -1;
>>>>>>> bcf2d14 (feat: 🎸 add day04 kim)
=======
  const nameA = a.last;
  const nameB = b.last;

  // Sort A to Z
  return nameA > nameB ? 1 : -1;
>>>>>>> 458542d (fix index.js)
});
console.table(lastName);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 458542d (fix index.js)
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
<<<<<<< HEAD
];

const countedNames = data.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++;
  } else {
    allNames[name] = 1;
  }
  return allNames;
=======
    "car",
    "car",
    "truck",
    "truck",
    "bike",
    "walk",
    "car",
    "van",
    "bike",
    "walk",
    "car",
    "van",
    "car",
    "truck",
];

const countedNames = data.reduce(function (allNames, name) {
    if (name in allNames) {
        allNames[name]++;
    } else {
        allNames[name] = 1;
    }
    return allNames;
>>>>>>> bcf2d14 (feat: 🎸 add day04 kim)
=======
];

const countedNames = data.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++;
  } else {
    allNames[name] = 1;
  }
  return allNames;
>>>>>>> 458542d (fix index.js)
}, {});
console.log(countedNames);
