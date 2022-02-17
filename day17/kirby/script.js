var select = function (query) {
  return document.querySelector(query);
};
var strip = function (text) {
  return text.replace(/^(a |the |an )/i, '').trim();
};
var Band = function (name) {
  /*html */ return '\n    <li>'.concat(name, '</li>\n');
};
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
  .sort(function (a, b) {
    return strip(a) > strip(b) ? 1 : -1;
  })
  .map(Band)
  .join('');
