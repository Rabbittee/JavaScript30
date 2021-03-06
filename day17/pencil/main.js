'use strict';
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
const bandsDom = document.querySelector('#bands');
const strip = (bandName) => bandName.replace(/^(a |the |an )/i, '').trim();
const pattern = (text) => `<li>${text}</li>`;
bandsDom.innerHTML = bands
  .sort((a, b) => (strip(a) > strip(b) ? 1 : -1))
  .map((band) => pattern(band))
  .join('');
