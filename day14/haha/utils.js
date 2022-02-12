// start with strings, numbers and booleans

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

const newPlayers = [...players];
// and we want to make a copy of it.
const team = players;
console.log(players, team);
// You might think we can just do something like this:
// team[3] = 'Lux';
// however what happens when we update that array?
// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way
const team2 = players.slice();
// or create a new array and concat the old one in
const team3 = [].concat(players);
// or use the new ES6 Spread
const team4 = [...players];
// now when we update it, the original one isn't changed
const team5 = Array.from(players);
// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Wes Bos',
  age: 80,
};

// and think we make a copy:

// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 99, age: 12 });
console.log(cap2);
// We will hopefully soon see the object ...spread
const cap3 = { ...person };
console.log('🚀 ~ cap3', cap3);
// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const wes = {
  name: 'Wes',
  age: 100,
  social: {
    twitter: '@wesbos',
    facebook: 'wesbos.developer',
  },
};
console.log('🚀 ~ wes', wes);
const dev = Object.assign({}, wes);
console.log('🚀 ~ dev', dev);
const dev2 = JSON.parse(JSON.stringify(wes));
console.log('🚀 ~ dev2', dev2);
