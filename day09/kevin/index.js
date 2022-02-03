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
console.log('Regular');

// Interpolated
console.log('Interpolated a word %s !', 'hello');

// Styled
console.log('%c Style!', 'color: #fff; background: #e3e');

// warning!
console.warn('warn');

// Error :|
console.error('error');

// Info
console.info('info');

// Testing
console.assert(1 == 2, '1 is not equal to 2');

// clearing
console.clear();

// Viewing DOM Elements
console.dir(document.querySelector('html'));

// Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(dog.name);
  console.log('Age: ', dog.age);
  console.groupEnd(dog.name);
});

// counting
console.count('Count!');
console.count('Count!');
console.count('Count!');
console.count('Count!');
console.count('Count!');

// timing
console.time('time');
const time1 = performance.now();
setTimeout(() => {
  console.timeEnd('time');
  const time2 = performance.now();
  console.log(`performance.now(): ${time2 - time1} ms`);
}, 100);
