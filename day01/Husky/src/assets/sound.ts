import boom from '@/sounds/boom.wav';
import clap from '@/sounds/clap.wav';
import hihat from '@/sounds/hihat.wav';
import kick from '@/sounds/kick.wav';
import openhat from '@/sounds/openhat.wav';
import ride from '@/sounds/ride.wav';
import snare from '@/sounds/snare.wav';
import tink from '@/sounds/tink.wav';
import tom from '@/sounds/tom.wav';

const soundList = [
  { name: 'clap', letter: 'A', playing: false, sound: clap },
  { name: 'hihat', letter: 'S', playing: false, sound: hihat },
  { name: 'kick', letter: 'D', playing: false, sound: kick },
  { name: 'openhat', letter: 'F', playing: false, sound: openhat },
  { name: 'boom', letter: 'G', playing: false, sound: boom },
  { name: 'ride', letter: 'H', playing: false, sound: ride },
  { name: 'snare', letter: 'J', playing: false, sound: snare },
  { name: 'tom', letter: 'K', playing: false, sound: tom },
  { name: 'tink', letter: 'L', playing: false, sound: tink },
];

export default soundList;
