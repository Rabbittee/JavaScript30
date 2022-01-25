const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

type City = {
  city: string;
  state: string;
  population: string;
};

const toJSON = (res: Response) => res.json();

type Fn<T, R> = (arg: T) => R;
const tap =
  <T>(fn: Fn<T, void>) =>
  (arg: T) => (fn(arg), arg);

const filter =
  <T>(fn: Fn<T, boolean>) =>
  (list: T[]) =>
    list.filter(fn);
const map =
  <T, R>(fn: Fn<T, R>) =>
  (list: T[]) =>
    list.map(fn);
const join =
  <T>(sep: string) =>
  (list: T[]) =>
    list.join(sep);

const select = <T extends Element>(query: string) => document.querySelector<T>(query);
const render = (element: HTMLElement) => (html: string) => (element.innerHTML = html);

const debounce = <T>(ms: number, fn: Fn<T, void>) => {
  let id = undefined;

  return (arg: T) => {
    if (id) clearTimeout(id);

    id = setTimeout(() => fn(arg), ms);
  };
};

const memo = <T, R>(keyFn: Fn<T, string>, fn: Fn<T, R>) => {
  const cache: Record<string, R> = {};

  return (arg: T) => {
    const key = keyFn(arg);

    if (!(key in cache)) cache[key] = fn(arg);

    return cache[key];
  };
};

const fetchCity = memo<void, Promise<City[]>>(
  JSON.stringify,
  () => fetch(endpoint).then(toJSON).then(tap(console.log))
  //
);

const searchWith = (token: string) => (target: string) => RegExp(token, 'ig').test(target);

const replaceWith = (token: string, replacement: string) => (target: string) =>
  target.replace(RegExp(`(${token})`, 'ig'), replacement);

function Record({ city, state, population }: City) {
  return /*html */ `
          <li>
              <span>${city}, ${state}</span>
              <span>${population}</span>
          </li>
      `.replace(/\n/g, '');
}

select('.search').addEventListener(
  'input',
  debounce(300, ({ target }) => {
    if (!(target instanceof HTMLInputElement)) return;

    if (!target.value) {
      return render(select('.suggestions'))('');
    }

    const search = searchWith(target.value);
    const replace = replaceWith(target.value, '<mark>$1</mark>');

    fetchCity()
      .then(filter(({ city, state }) => search(city) || search(state)))
      .then(map(Record))
      .then(join(''))
      .then(replace)
      .then(render(select('.suggestions')));
  })
);
