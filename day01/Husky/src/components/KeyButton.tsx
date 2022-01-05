import Key from "../models/Key";

export default function KeyButton(props: Key) {
  return (
    <div
      className={
        "border-4 border-solid border-black rounded-lg m-4 text-2xl py-4 px-2 w-40 " +
        "text-center text-white bg-black bg-opacity-40 cursor-pointer " +
        "transition-all " +
        (props.playing ? "playing" : "")
      }
      onClick={props.onClick}
    >
      <kbd className="block text-6xl">{props.letter}</kbd>
      <span className="text-xl uppercase tracking-widest text-yellow-500">
        {props.name}
      </span>
    </div>
  );
}
