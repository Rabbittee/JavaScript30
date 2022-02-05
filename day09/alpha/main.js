const dogs = [
  { name: 'Snickers', age: 2 },
  { name: 'hugo', age: 8 },
];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

window.makeGreen = makeGreen;

// Regular
console.log(`pencil sit!`);

// Interpolated
console.log('Hello I am a %s string!', '💩');

// Styled
console.log(
  '%c Pencil is green',
  'font-size:50px; background:gray; text-shadow: 10px 10px 0 green'
);

// warning!
console.warn('OH~~no~~pencil your day6!');

// Error :|
console.error('There is no pencil day6');

// Info
console.info('If you not finish day6, you will be a pencil');

// Testing
const p = document.querySelector('p');

console.assert(p.classList.contains('ouch'), '不可以色色!');
// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

console.clear();
// Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`Dog's name is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('Kevin is man');
console.count('Pencil is green');
console.count('Pencil is green');
console.count('Little withe is lair');
console.count('Little withe is lair');
console.count('Little withe is lair');
console.count('Little withe is lair');

// timing
console.time('fetching time');
fetch('https://api.github.com/users/wesbos')
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd('fetching time');
    console.table(data);
  });
