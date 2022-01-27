// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const currentYear = new Date().getFullYear();
const hasOnePerson19OrOlder = people.some(({ year }) => currentYear - year >= 19);

// Array.prototype.every() // is everyone 19 or older?
const isEveryOn19OrOlder = people.every(({ year }) => currentYear - year >= 19);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const findId = (ary, id) => ary.find((item) => item.id === id);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const _comments = [...comments]; // 因為後面還要用到 comments 所以這邊另外複製一個來用
const findIndexById = (ary, id) => ary.findIndex((item) => item.id === id);
_comments.splice(findIndexById(_comments, 823423), 1);

/**
 *  render functions ====
 */
const answers = [
  {
    title: 'Q1: Is at least one person 19 or older?',
    subtitle: 'Array.prototype.some()',
    answer: hasOnePerson19OrOlder,
  },
  {
    title: 'Q2: Is everyone 19 or older?',
    subtitle: 'Array.prototype.every()',
    answer: isEveryOn19OrOlder,
  },
  {
    title: 'Q3: Find the comment with the ID of 823423',
    subtitle: 'Array.prototype.find()',
    answer: findId(comments, 823423),
  },
  {
    title: 'Q4: Delete the comment with the ID of 823423',
    subtitle: 'Array.prototype.findIndex()',
    answer: _comments,
  },
];

const generateTemplate = ({ title, answer, subtitle }) => {
  return `
  <li class="card">
    <h2>${title}</h2>
    <p>
      <code>${subtitle}</code>
    </p>
    <pre>${JSON.stringify(answer, null, 2)}</pre>
  </li>
  `;
};

function renderAnswers(content) {
  document.getElementById('render-list').innerHTML = content
    .map((answer) => generateTemplate(answer))
    .join('');
}

/**
 *  Result!
 */
console.table(answers);
renderAnswers(answers);
