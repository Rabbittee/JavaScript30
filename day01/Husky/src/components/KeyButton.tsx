import Key from "../models/Key";
import { play } from "../utils/music";

export default function KeyButton(props: Key) {
  return (
    <button
      className={
        "border-4 border-solid border-black rounded-lg m-4 text-2xl py-4 px-2 w-40 text-center text-white bg-black bg-opacity-40" +
        (props.playing ? " playing" : "")
      }
      onClick={() => play(props.name)}
    >
      <kbd className="block text-6xl">{props.letter}</kbd>
      <span className="text-xl uppercase tracking-widest text-yellow-500">
        {props.name}
      </span>
    </button>
  );
}
