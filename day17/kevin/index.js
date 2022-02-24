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

const select = (selector) => document.querySelector(selector);

const isNotArticle = (letter = '') => {
  const articles = ['an', 'a', 'the'];
  return articles.includes(letter.toLowerCase()) === false;
};

const filterArticle = (string) => {
  return string.split(' ').filter(isNotArticle).join(' ');
};

const compareWithoutArticles = (a, b) =>
  filterArticle(b).toLowerCase() < filterArticle(a).toLowerCase() ? 1 : -1;

const liTemplate = (text) => `<li>${text}</li>`;

select('#bands').innerHTML = bands.sort(compareWithoutArticles).map(liTemplate).join('');
