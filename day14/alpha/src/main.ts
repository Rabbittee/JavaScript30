import './style.css';
// start with strings, numbers and booleans

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;

console.log(players, team);

// You might think we can just do something like this:
// team[3] = 'Lux';

// however what happens when we update that array?

// console.log(team);

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice();

// one way

// or create a new array and concat the old one in
const team3 = ([] as string[]).concat(players);

// or use the new ES6 Spread
const team4 = [...players];
team4[3] = 'pencil sit!';
console.log('es6 copied', team4);

const team5 = Array.from(players);
console.log(team2, team3, team5);

console.log('original is not changed', players);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Wes Bos',
  age: 80,
};

// and think we make a copy:
// const captain = person;
// captain.number = 99;

// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 87, age: 2000 });
console.log('use Object asssign', cap2);

// We will hopefully soon see the object ...spread

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const wes = {
  name: 'Wes',
  age: 100,
  social: {
    twitter: '@wesbos',
    facebook: 'wesbos.developer',
  },
};

console.clear();
console.log('wes', wes);

const dev = Object.assign({}, wes);
console.log(dev);

const dev2 = JSON.parse(JSON.stringify(wes));
console.log(dev2);
