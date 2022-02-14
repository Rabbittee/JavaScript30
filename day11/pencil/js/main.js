import { $ } from './utils.js';

const ICON_PLAYING = "./icon/playing.svg";
const ICON_PAUSE = "./icon/pausing.svg";
const ICON_HIGH_VOL = "./icon/high_vol.svg";
const ICON_LOW_VOL = "./icon/low_vol.svg";
const ICON_MUTE = "./icon/mute.svg";

const playingStatus = (pausing) => {
  const playingBtnImg = $('button[title="playing"] img');
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
    const currentBtn = e.target.closest('button');
    const isPaused = $("#mainVideo").paused;
    currentBtn.title === "replay"
      ? replay(isPaused)
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
  const volBtnImg = $('button[title="volume"] img');
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
  
$('button[title="volume"]').addEventListener(
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