import soundMap from "../assets/sound";

function play(name: string) {
  const audio = new Audio(soundMap[name]);
  audio.currentTime = 0;
  audio.play();
}

export { play };
