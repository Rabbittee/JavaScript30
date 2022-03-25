import './style.css';

const selectAll = <T extends HTMLElement>(query: string) =>
  Array.from(document.querySelectorAll<T>(query));

const select = <T extends HTMLElement>(query: string) => document.querySelector<T>(query);

const holes = selectAll<HTMLElement>('.hole');
const scoreBoard = select<HTMLElement>('.score');
const gameBoard = select<HTMLElement>('.game');
const button = select<HTMLButtonElement>('button');

const setTime = {
  max: 1000,
  min: 200,
};

type StateType = {
  lastHole: HTMLElement | null;
  timeUp: boolean;
  score: number;
};

const state: StateType = {
  lastHole: null,
  timeUp: false,
  score: 0,
};

function randomTime(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomIndex(length: number) {
  return Math.floor(Math.random() * length);
}

function randomHole(holes: HTMLElement[]): HTMLElement {
  const index = randomIndex(holes.length);
  const hole = holes[index];

  if (hole === state.lastHole) {
    console.log('repeat');
    return randomHole(holes);
  }

  state.lastHole = hole;
  return hole;
}

function handleHole() {
  const { max, min } = setTime;
  const time = randomTime(max, min);
  const hole = randomHole(holes);
  hole.classList.add('up');

  setTimeout(() => {
    hole.classList.remove('up');
    if (!state.timeUp) handleHole();
  }, time);
}

function initState() {
  if (!scoreBoard) throw new Error('is null');
  scoreBoard.textContent = '0';
  state.timeUp = false;
  state.score = 0;
}

function startGame() {
  initState();

  handleHole();

  setTimeout(() => (state.timeUp = true), 10000);
}

function onClick(e: Event) {
  const target = <HTMLElement>e.target;
  const currentHole = <HTMLElement>target.closest('.hole');
  const currentMole = <HTMLElement>target.closest('.mole');

  if (!currentMole) return;

  currentHole.classList.remove('up');
  addScore();
}

function addScore() {
  state.score += 1;
  if (!scoreBoard) throw new Error('is null');
  scoreBoard.textContent = state.score.toString();
}

button?.addEventListener('click', startGame);
gameBoard?.addEventListener('click', onClick);
