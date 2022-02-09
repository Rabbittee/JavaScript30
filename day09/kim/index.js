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
console.log('hello');

// Interpolated
console.log('Hello I am a %s string', '👼');

// Styled
console.log(
    '%c I am some great text Kim ',
    'font-size: 50px; background-color: skyblue;color: white;border-radius: 50px;'
);

// warning!
console.warn('Oh NOOO');

// Error :|
console.error('SHIT!');

// Info
console.info('鱷魚 eat 3-4 people per year!');

// Testing
const p = document.querySelector('p');
// console.assert(p.classList.contains('assert'), 'That is wrong!');

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

console.clear();

// Grouping together
dogs.forEach((dog) => {
    // console.group(`${dog.name}`);
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`This is ${dog.name}, This is dog ${dog.age} years`);
    console.log(`This is ${dog.name}, This is dog ${dog.age * 7} years`);
    console.groupEnd(`${dog.name}`);
});

// counting
console.count('wes');
console.count('wes');
console.count('wes');
console.count('steve');
console.count('steve');
console.count('steve');

console.count('wes');
console.count('wes');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
    .then((data) => data.json())
    .then((data) => {
        console.timeEnd('fetching data');
        console.log(data);
    });

console.table(dogs);
