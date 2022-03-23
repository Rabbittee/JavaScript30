const select = (selector) => document.querySelector(selector);
const selectAll = (selector) => document.querySelectorAll(selector);

class Score {
  constructor() {
    this.score = 0;
  }

  resetScore() {
    this.score = 0;
  }

  addScore(step) {
    this.score = Math.max(this.score + step, 0);
  }
}

class GamePlay extends Score {
  constructor(secondsOfRound) {
    super();
    this.secondsOfRound = secondsOfRound;
    this.leftTime = secondsOfRound;
  }

  intervalId = null;

  gameStart() {
    this.gameReset();
    this.countDown();
  }

  gameReset() {
    super.resetScore();
    this.leftTime = this.secondsOfRound;
    if (this.intervalId !== null) {
      this.handleClearInterval();
    }
  }

  handleClearInterval() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  countDown() {
    const dealTime = () => {
      this.displayTime();
      if (this.leftTime <= 0) {
        this.handleClearInterval();
      }
      this.leftTime -= 1;
    };

    dealTime();
    this.intervalId = setInterval(dealTime, 1000);
  }

  handleScore(step) {
    super.addScore(step);
    this.displayScore();
  }

  displayTime() {
    select('#leftTime').textContent = this.leftTime;
  }

  displayScore() {
    select('.score').textContent = this.score;
  }
}

class WhackAMole extends GamePlay {
  constructor(secondsOfRound, eachClickScore) {
    super(secondsOfRound);
    this.eachClickScore = eachClickScore || 1;
  }

  init() {
    select('#start-btn').addEventListener('click', () => this.startGamePlay());
    select('.game').addEventListener('click', (e) => this.handlePanelClick(e));
    this.generateFeedbackText();
  }

  startGamePlay() {
    super.gameStart();
    this.continuouslyRaiseMole();
  }

  randomSeconds(min, max) {
    return Math.max(Math.random() * max * 10, min * 10) / (max * 10);
  }

  handlePanelClick({ target, x, y }) {
    const isClickMole = !!target.closest('.mole');
    if (isClickMole === false) return;
    super.handleScore(this.eachClickScore);
    this.displayFeedbackText({ x, y });
  }

  continuouslyRaiseMole() {
    if (this.leftTime <= 0) return;
    const randomTime = this.randomSeconds(0.2, 0.4);
    setTimeout(() => {
      this.raiseMole();
      this.continuouslyRaiseMole();
    }, randomTime * 1000);
  }

  raiseMole() {
    const randomIndex = Math.floor(Math.random() * 6);
    const targetHole = selectAll('.hole')[randomIndex];
    const displaySeconds = this.randomSeconds(0.2, 0.6);
    const isRaised = targetHole.classList.contains('up');

    if (isRaised) {
      return this.raiseMole();
    }
    targetHole.classList.add('up');
    setTimeout(() => {
      targetHole.classList.remove('up');
    }, displaySeconds * 1000);
  }

  clickFeedbackText = null;

  generateFeedbackText() {
    const text = document.createElement('span');
    text.textContent = `+${this.eachClickScore}`;
    text.style.fontSize = '52px';
    text.style.fontWeight = 'bold';
    text.style.color = '#f33';
    text.style.position = 'absolute';
    text.style.left = '-10vw';
    text.style.top = '-10vh';
    text.style.transform = 'translate(-50%, -50%)';
    text.style.pointerEvents = 'none';
    text.addEventListener('animationend', () => {
      text.classList.remove('fade');
      text.style.left = '-10vw';
      text.style.top = '-10vh';
    });
    document.body.appendChild(text);
    this.clickFeedbackText = text;
  }

  displayFeedbackText({ x, y }) {
    if (this.clickFeedbackText.classList.contains('fade')) {
      this.clickFeedbackText.classList.remove('fade');
    }
    this.clickFeedbackText.style.left = `${x}px`;
    this.clickFeedbackText.style.top = `${y}px`;
    this.clickFeedbackText.classList.add('fade');
  }
}

const whackAMole = new WhackAMole(15, 1);
whackAMole.init();
