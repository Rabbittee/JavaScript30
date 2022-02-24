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

const regex = /^(a |the |an )/i;
const $ = (target) => document.querySelector(target);
const strip = (sentence) => sentence.replace(regex, '').trim();
const sortList = bands.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));

$('#bands').innerHTML = sortList.map((sentence) => `<li>${sentence}</li>`).join('');
