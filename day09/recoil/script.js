const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log(`halo, I am Snickers`)

// Interpolated
console.log(`it name ${dogs[0].name}`)

// Styled
console.log('🐤🐤🐤🐤')

// warning!
console.warn('White is a lair');

// Error :|
console.error('White is lair');

// Info
console.info('Crocodiles eat 3-4 people per year');

// Testing
console.assert('That is wrong!')

// clearing
const p = document.querySelector('p');
console.clear();
console.info(p);
console.info(p);
console.clear();

// Viewing DOM Elements
console.dir(p);

// Grouping together
dogs.forEach(({ name, age})=>{
    console.group(name);
    console.log(`This is ${name}.`);
    console.log(`${name} is ${age} years old.`);
    console.log(`${name} is ${age * 7} dog years old.`);
    console.groupEnd(name);
});

// counting
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.countReset('Steve');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');


// timing
console.time('fetch data');
fetch('https://api.github.com/users/wesbos')
    .then(res=>res.json())
    .then((payload)=>{
        console.timeEnd(payload);
        console.timeEnd('fetch data');
    })
    
console.table(dogs)