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

type Fn<T, R> = (arg: T) => R;
const describe = <T>(title: string, fn: Fn<void, T>) => {
  console.group(title);

  console.table(fn());

  console.groupEnd();
};

type ItemOf<T> = T extends (infer Item)[] ? Item : never;
type People = ItemOf<typeof people>;
const orderThan = (year: People['year']) => (people: People) => people.year >= year;

describe(`is at least one person 19 or older?`, () => {
  return people.some(orderThan(19));
});

describe(`is everyone 19 or older?`, () => {
  return people.every(orderThan(19));
});

type IComment = ItemOf<typeof comments>;
const byID = (id: IComment['id']) => (comment: IComment) => comment.id === id;
const not =
  <T>(fn: Fn<T, boolean>) =>
  (arg: T) =>
    !fn(arg);

describe(`find the comment with the ID of 823423`, () => {
  return comments.find(byID(823423));
});

describe(`Find and delete the comment with the ID of 823423`, () => {
  return comments.filter(not(byID(823423)));
});
