import { useState, useEffect } from "react";

import soundList from "./assets/sound";
import KeyButton from "./components/KeyButton";
import Key from "./models/Key";
import { play } from "./utils/music";

const keyPress =
  (type: string, data: Key[], setData: Function) =>
  (event: { code: string }) => {
    const k = event.code.replace("Key", "").toUpperCase();
    const target = data.find((key) => key.letter === k);
    if (target === undefined) return;
    if (type === "down") play(target);
    target.playing = type === "down";
    setData([...data]);
  };

function App() {
  const [data, setData] = useState(soundList);

  const handleKeyPressDown = keyPress("down", data, setData);
  const handleKeyPressUp = keyPress("up", data, setData);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPressDown);
    window.addEventListener("keyup", handleKeyPressUp);
    return () => {
      window.removeEventListener("keydown", handleKeyPressDown);
      window.removeEventListener("keyup", handleKeyPressUp);
    };
  });

  return (
    <div className="flex flex-1 min-h-screen items-center justify-center">
      {soundList.map((key) => (
        <KeyButton
          key={key.letter}
          name={key.name}
          letter={key.letter}
          playing={key.playing}
          sound={key.sound}
        />
      ))}
    </div>
  );
}

export default App;
