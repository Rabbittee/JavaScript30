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

const bandsDom: HTMLElement | null = document.querySelector('#bands');

const strip = (bandName: string): string => bandName.replace(/^(a |the |an )/i, '').trim();

const pattern = (text: string): string => `<li>${text}</li>`;
bandsDom!.innerHTML = bands
  .sort((a: string, b: string): number => (strip(a) > strip(b) ? 1 : -1))
  .map((band) => pattern(band))
  .join('');
