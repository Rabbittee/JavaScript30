import './style.css';

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

const select = <T extends HTMLElement>(query: string) => document.querySelector<T>(query);

const list = select<HTMLUListElement>('#bands');

function filterArticles(band: string) {
  return band
    .toLocaleLowerCase()
    .replace(/^(the |a |an )/, '')
    .trim();
}

const sortList = bands.sort((a: string, b: string) =>
  filterArticles(a) > filterArticles(b) ? 1 : -1
);

if (!list) throw new Error('element is null');
list.innerHTML = sortList.map((band) => `<li>${band}</il>`).join('');

console.table(sortList);
