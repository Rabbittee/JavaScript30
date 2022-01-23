import Key from '../models/Key';
import clsx from 'clsx';

export default function KeyButton(props: Key) {
  return (
    <div
      className={clsx([
        'border-4 border-solid border-black rounded-lg bg-black bg-opacity-40',
        'm-4 py-4 px-2 w-40 text-2xl',
        'text-center text-white  transition-all',
        { playing: props.playing },
      ])}
    >
      <kbd className="block text-6xl">{props.letter}</kbd>
      <span className="text-xl uppercase tracking-widest text-yellow-500">{props.name}</span>
    </div>
  );
}
