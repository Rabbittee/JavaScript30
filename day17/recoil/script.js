const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog',
];

const list = document.querySelector('#bands');

const toNewString = (name) => name.replace(/^(a |an |the )/i, '').trim();

const sortedBands = bands.sort((a, b) => (toNewString(a) > toNewString(b) ? 1 : -1));

list.innerHTML = sortedBands.map((band) => `<li>${band}</li>`).join('');
