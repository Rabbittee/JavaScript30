var dogs = [
  { name: 'Snickers', age: 2 },
  { name: 'hugo', age: 8 },
];
function makeGreen() {
  var p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}
// clearing
console.clear();
// Regular
console.log('hello');
// Interpolated
console.log('Hello I am a %s string!', '💩');
// Styled
console.log(
  '%c I am some great text',
  'font-size: 50px; background: red; text-shadow: 10px 10px 0 blue'
);
// warning!
console.warn('OH NOOO');
// Error :|
console.error('Shit!');
// Info
console.info('Crocodiles eat 3-4 people per year');
// Testing
var p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong!');
// Viewing DOM Elements
console.log(p);
console.dir(p);
// Grouping together
dogs.forEach(function (dog) {
  console.groupCollapsed(''.concat(dog.name));
  console.log('This is '.concat(dog.name));
  console.log(''.concat(dog.name, ' is ').concat(dog.age, ' year old'));
  console.log(''.concat(dog.name, ' is ').concat(dog.age * 7, ' dog years old'));
  console.groupEnd();
});
// counting
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');
// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(function (data) {
    return data.json();
  })
  .then(function (data) {
    console.timeEnd('fetching data');
    console.log(data);
  });
console.table(dogs);
