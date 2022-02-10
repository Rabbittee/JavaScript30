const dogs = [
  { name: 'Snickers', age: 2 },
  { name: 'hugo', age: 8 },
];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('Hello rabbits!');

// Interpolated
console.log('Hello %s rabbit!', 'white');

// Styled
console.log(
  '%c This is a pencil',
  'font-size: 50px; background: lightblue; text-shadow: 10px 10px 0 aliceblue'
);

// warning!
console.warn('Be care of Pencil!');

// Error :|
console.error('Pencil is colorful!');

// Info
console.info('Info icon only in firefox.');

// Testing
console.assert(1 > 2, 'Are you kidding?');
console.assert(1 === 1, '這行不會印出來');

// clearing
//console.clear()

// Viewing DOM Elements
console.dir(document.getElementsByTagName('p'));

// Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`My dog is ${dog.name}, he is ${dog.age} years old.`);
  console.groupEnd();
});
// counting
console.count('White');
console.count('Husky');
console.count('White');
console.count('White');
console.count('Husky');
console.count('Pencil');

// timing
console.time('wait');
setTimeout(() => {
  console.log('wait me!');
  console.timeEnd('wait');
}, 2000);
