import { City } from './interfaces';

const api = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
};

const format = (data: City[]) => {
  return data.map((row) => {
    const { rank, ...rust } = row;
    rust.growth_from_2000_to_2013 = Number((<string>rust.growth_from_2000_to_2013).slice(0, -1));
    rust.population = Number(rust.population);
    return rust;
  });
};

interface Boundary {
  min: number;
  max: number;
}

const getBoundary = <Input>(arr: Input[], func: (arg: Input) => number): Boundary => {
  return arr.reduce(
    (acc, curr) => {
      const value = func(curr);
      if (value < acc.min) {
        acc.min = value;
      }
      if (value > acc.max) {
        acc.max = value;
      }
      return acc;
    },
    { max: -Infinity, min: Infinity }
  );
};

export { api, format, getBoundary };
