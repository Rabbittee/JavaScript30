var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
// start with strings, numbers and booleans
{
  var age = 100;
  var age2 = age;
  console.log(age, age2);
  age = 200;
  console.log(age, age2);
  var name_1 = 'Wes';
  var name2 = name_1;
  console.log(name_1, name2);
  name_1 = 'wesley';
  console.log(name_1, name2);
}
// Let's say we have an array
var players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
// and we want to make a copy of it.
var team = players;
console.log(players, team);
// You might think we can just do something like this:
// team[3] = 'Lux';
// however what happens when we update that array?
// now here is the problem!
// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!
// So, how do we fix this? We take a copy instead!
var team2 = players.slice();
// one way
// or create a new array and concat the old one in
var team3 = [].concat(players);
// or use the new ES6 Spread
var team4 = __spreadArray([], players, true);
team4[3] = 'heeee hawww';
console.log(team4);
var team5 = Array.from(players);
// now when we update it, the original one isn't changed
// The same thing goes for objects, let's say we have a person object
// with Objects
var person = {
  name: 'Wes Bos',
  age: 80,
};
// and think we make a copy:
// const captain = person;
// captain.number = 99;
// how do we take a copy instead?
var cap2 = Object.assign({}, person, { number: 99, age: 12 });
console.log(cap2);
// We will hopefully soon see the object ...spread
// const cap3 = {...person};
// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
var wes = {
  name: 'Wes',
  age: 100,
  social: {
    twitter: '@wesbos',
    facebook: 'wesbos.developer',
  },
};
console.log(wes);
var dev = Object.assign({}, wes);
var dev2 = JSON.parse(JSON.stringify(wes));
