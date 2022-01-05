import KeyButton from "./components/KeyButton";
import { play } from "./utils/music";

function App() {
  const keysInfo = [
    { name: "clap", letter: "A", playing: false },
    { name: "hihat", letter: "S", playing: false },
    { name: "kick", letter: "D", playing: true },
    { name: "openhat", letter: "F", playing: false },
    { name: "boom", letter: "G", playing: false },
    { name: "ride", letter: "H", playing: false },
    { name: "snare", letter: "J", playing: false },
    { name: "tom", letter: "K", playing: false },
    { name: "tink", letter: "L", playing: false },
  ];

  const keys = keysInfo.map((key) => (
    <KeyButton
      key={key.letter}
      name={key.name}
      letter={key.letter}
      playing={key.playing}
    />
  ));

  window.addEventListener("keydown", (event) => {
    console.log(event);
    const k = event.code.replace("Key", "").toUpperCase();
    const target = keysInfo.find((key) => key.letter === k);
    console.log(target);
    if (target === undefined) return;
    play(target.name);
  });

  return (
    <div className="flex flex-1 min-h-screen items-center justify-center">
      {keys}
    </div>
  );
}

export default App;
