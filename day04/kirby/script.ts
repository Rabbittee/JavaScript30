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

type Inventor = typeof inventors[0];

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

type Fn = () => any;
function describe(title: string, fn: Fn) {
  console.group(title);

  console.table(fn());

  console.groupEnd();
}

describe(`1. Filter the list of inventors for those who were born in the 1500's`, () => {
  const whoBornIn1500 = ({ year }: Inventor) => 1600 > year && year >= 1500;

  return inventors.filter(whoBornIn1500);
});

describe(`2. Give us an array of the inventors first and last names`, () => {
  const pickFirstAndLastName = ({ first, last }: Inventor) => ({ first, last });

  return inventors.map(pickFirstAndLastName);
});

describe(`3. Sort the inventors by birthdate, oldest to youngest`, () => {
  const byBirthdateAsc = (a: Inventor, b: Inventor) => a.year - b.year;

  return inventors.sort(byBirthdateAsc);
});

const calcLive = ({ year, passed }: Inventor) => passed - year;
describe(`4. How many years did all the inventors live all together?`, () => {
  const sumAllLive = (sum: number, x: Inventor) => sum + calcLive(x);

  return inventors.reduce(sumAllLive, 0);
});

describe(`5. Sort the inventors by years lived`, () => {
  const byLiveDesc = (a: Inventor, b: Inventor) => calcLive(b) - calcLive(a);

  return inventors.sort(byLiveDesc);
});

// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
describe(`6. create a list of Boulevards in Paris that contain 'de' anywhere in the name`, () => {
  const includes = (token: string) => (text: string) =>
    text.toLowerCase().includes(token.toLowerCase());

  return people.filter(includes('de'));
});

describe(`7. sort Exercise: Sort the people alphabetically by last name`, () => {
  const getLastNameCharCode = (name: string) => {
    const tokens = name.split(' ');

    return tokens[tokens.length - 1].charCodeAt(0);
  };

  const byLastNameCharCodeAsc = (a, b) => getLastNameCharCode(a) - getLastNameCharCode(b);

  return people.sort(byLastNameCharCodeAsc);
});

describe(`8. Reduce Exercise: Sum up the instances of each of these`, () => {
  return [
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
  ].reduce((map, item) => {
    if (!map[item]) map[item] = 0;

    map[item] += 1;

    return map;
  }, {});
});
