const select = <T extends HTMLElement>(query: string) => document.querySelector<T>(query);

const play = (audio: HTMLAudioElement) => {
  audio.currentTime = 0;
  audio.play();
};

const glow = (element: HTMLElement, flag = true) => element.classList.toggle('playing', flag);

const getKeyCode = (key: string) => key.toUpperCase().charCodeAt(0);

function playAudioEffect(e: KeyboardEvent) {
  const code = getKeyCode(e.key);

  glow(select(`.key[data-key="${code}"]`), true);

  return play(select(`audio[data-key="${code}"]`));
}

function releaseAudioEffect(e: KeyboardEvent) {
  const code = getKeyCode(e.key);

  glow(select(`.key[data-key="${code}"]`), false);
}

document.addEventListener('keydown', playAudioEffect);
document.addEventListener('keyup', releaseAudioEffect);
