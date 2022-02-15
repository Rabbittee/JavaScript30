import { $ } from './utils.js';

const ICON_PLAYING = "./icon/playing.svg";
const ICON_PAUSE = "./icon/pausing.svg";
const ICON_HIGH_VOL = "./icon/high_vol.svg";
const ICON_LOW_VOL = "./icon/low_vol.svg";
const ICON_MUTE = "./icon/mute.svg";

const playingStatus = (pausing) => {
  const playingBtnImg = $('[data-title="playing"]').getElementsByTagName('img')[0];
  if (pausing) {
    playingBtnImg.src = ICON_PAUSE;
    $("#mainVideo").play();
  } else {
    playingBtnImg.src = ICON_PLAYING;
    $("#mainVideo").pause();
  }
}

const replay = (pausing) => {
  $("#mainVideo").currentTime = 0;
  playingStatus(pausing);
}

$('#playArea').addEventListener(
  'click', (e) => {
    const currentTitle = e.target.closest('.btn').dataset.title;
    const isPaused = $("#mainVideo").paused;
    currentTitle === "replay"
      ? replay(false)
      : playingStatus(isPaused);
});

let playerState = {
  previousVol: $("#mainVideo").volume,
}

const setPreviousVol = (vol) => {
  playerState.previousVol = vol;
  console.log('previousVol', playerState.previousVol);
}

const setVolIcon = (vol) => {
  const volBtnImg = $('[data-title="volume"]').getElementsByTagName('img')[0];
  volBtnImg.src = ICON_MUTE;
  if (vol > 0) {
    vol > 0.5 
      ? volBtnImg.src = ICON_HIGH_VOL
      : volBtnImg.src = ICON_LOW_VOL;
  }
}

const updateVolState = (vol) => {
  $('input[name="volume"]').value = vol;
  $("#mainVideo").volume = vol;
  setVolIcon(vol);
}

$('input[name="volume"]').addEventListener(
  'input', () => {
    const vol = $('input[name="volume"]').value;
    updateVolState(vol);
});

$('[data-title="volume"]').addEventListener(
  'click', () => {
    const currentVol = $('#mainVideo').volume;
    console.log('click get vol: ', currentVol);
    if (currentVol > 0) {
      setPreviousVol(currentVol);
      updateVolState(0)
    } else {
      updateVolState(playerState["previousVol"]);
    }
  }
)

$('.progress__area').addEventListener(
  'click', (e) => {
    const currentElement = e.target.closest('.btn span');
    const skipValue = currentElement.dataset.skip;
    $('#mainVideo').currentTime += parseFloat(skipValue);
  }
)

$('input[name="playbackRate"]').addEventListener('input', () => {
  const playRate = $('input[name="playbackRate"]').value;
  $('#mainVideo').playbackRate = playRate;
})

$('#mainVideo').addEventListener(
  'timeupdate',
  () => {
    const currentTime = $('#mainVideo').currentTime;
    const duration = $('#mainVideo').duration;
    const percent = (currentTime / duration) * 100;
    $('.progress__filled').style.flexBasis = `${percent}%`;
  }
)