interface City {
  city: string;
  growth_from_2000_to_2013: string | number;
  latitude: number;
  longitude: number;
  population: string | number;
  rank?: string;
  state: string;
}
interface Boundary {
  min: number;
  max: number;
}

type Bound = [
  [number, number],
  [number, number]
];

export { City, Bound, Boundary };
