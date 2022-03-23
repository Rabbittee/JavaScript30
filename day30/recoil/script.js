const select = (target) => document.querySelector(target);
const selectAll = (target) => document.querySelectorAll(target);

const holes = selectAll('.hole');
const moles = selectAll('.mole');
const startBtn = select('button');
const scoreBoard = select('.score');

let lastHole;

function state(value) {
  return {
    watch: (func) => func(value),
  };
}

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    console.log('Ah nah thats the same one bud');
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

function peep(timeUp) {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) peep(timeUp);
  }, time);
}

function startGame(status) {
  scoreBoard.textContent = 0;
  status.timeUp = false;
  status.score = 0;
  peep(status.timeUp);
  setTimeout(() => (status.timeUp = true), status.timer);
}

function bonk(status, e) {
  if (!e.isTrusted) return; // cheater!
  status.score++;
  e.target.parentNode.classList.remove('up');
  scoreBoard.textContent = status.score;
  console.log(status.score);
}

state({ score: 0, timer: 60 * 1000, timeUp: true }).watch((status) => {
  moles.forEach((mole) => mole.addEventListener('click', (e) => bonk(status, e)));
  startBtn.addEventListener('click', () => startGame(status));
});
