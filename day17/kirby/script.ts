const select = (query: string) => document.querySelector(query);
const strip = (text: string) => text.replace(/^(a |the |an )/i, '').trim();
const Band = (name: string) => /*html */ `
    <li>${name}</li>
`;

select('#bands').innerHTML = [
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
]
  .sort((a, b) => (strip(a) > strip(b) ? 1 : -1))
  .map(Band)
  .join('');
