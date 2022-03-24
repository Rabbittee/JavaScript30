/**
 * 遊戲開始、結束
 * - 按下 start 後觸發 startGame function 開始遊戲
 * - 時間 10 sec
 * 遊戲機制
 * - 新增 up class 來讓地鼠上升、出現
 * - 在隨機的洞穴出現
 * - 出現後維持的時間隨機 0.2 ~ 1 sec
 * - 點擊後增加計數
 * - 點擊後移除 up class
 * - 點擊後重置出現的計時器
 */

function select(dom) {
  return document.querySelector(dom);
}

function selectAll(dom) {
  return document.querySelectorAll(dom);
}

const holes = selectAll('.hole');
const holeAmounts = holes.length;
const scoreBoard = select('.score');
const moles = selectAll('.mole');

let state = {
  score: 0,
  processing: true,
  prevHole: null,
};

function scoreAdd() {
  state.score += 1;
  scoreBoard.textContent = state.score;
}

function handleGameBoard(e) {
  const hole = e.target.closest('.hole');
  const mole = e.target.closest('.mole');
  if (!mole) return;

  // make mole down
  hole.classList.remove('up');
  scoreAdd();
}

function randomTime() {
  return (Math.random() * 0.8 + 0.2) * 1000;
}

function moleUp() {
  // the first one is null
  !!state.prevHole && holes[state.prevHole].classList.remove('up');
  const holeIndex = Math.floor(Math.random() * holeAmounts);

  if (holeIndex !== state.prevHole) {
    holes[holeIndex].classList.add('up');
    state.prevHole = holeIndex;
  } else {
    const anotherHoleIndex = 5 - holeIndex;
    holes[anotherHoleIndex].classList.add('up');
    state.prevHole = anotherHoleIndex;
  }

  setTimeout(() => {
    // recursion
    state.processing && moleUp();
  }, randomTime());
}

// button onClick
function startGame() {
  moleUp();
  setTimeout(() => {
    // after 10 seconds finish
    state.processing = false;
    holes[state.prevHole].classList.remove('up');
  }, 10000);
}

select('.game').addEventListener('click', handleGameBoard);
