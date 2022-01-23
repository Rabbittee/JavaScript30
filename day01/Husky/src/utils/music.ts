import Key from '../models/Key';

function play(sound: Key) {
  const audio = new Audio(sound?.sound);
  audio.currentTime = 0;
  audio.play();
}

export { play };
