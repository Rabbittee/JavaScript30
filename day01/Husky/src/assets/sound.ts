import boom from "../../../sample/sounds/boom.wav";
import clap from "../../../sample/sounds/clap.wav";
import hihat from "../../../sample/sounds/hihat.wav";
import kick from "../../../sample/sounds/kick.wav";
import openhat from "../../../sample/sounds/openhat.wav";
import ride from "../../../sample/sounds/ride.wav";
import snare from "../../../sample/sounds/snare.wav";
import tink from "../../../sample/sounds/tink.wav";
import tom from "../../../sample/sounds/tom.wav";

const soundList = [
  { name: "clap", letter: "A", playing: false, sound: clap },
  { name: "hihat", letter: "S", playing: false, sound: hihat },
  { name: "kick", letter: "D", playing: false, sound: kick },
  { name: "openhat", letter: "F", playing: false, sound: openhat },
  { name: "boom", letter: "G", playing: false, sound: boom },
  { name: "ride", letter: "H", playing: false, sound: ride },
  { name: "snare", letter: "J", playing: false, sound: snare },
  { name: "tom", letter: "K", playing: false, sound: tom },
  { name: "tink", letter: "L", playing: false, sound: tink },
];

export default soundList;
