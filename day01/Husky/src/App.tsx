import { useState, useEffect, useCallback } from "react";

import soundList from "./assets/sound";
import KeyButton from "./components/KeyButton";
import { play } from "./utils/music";

function App() {
  const [data, setData] = useState(soundList);

  const keys = soundList.map((key, index) => (
    <KeyButton
      key={key.letter}
      name={key.name}
      letter={key.letter}
      playing={key.playing}
      sound={key.sound}
    />
  ));

  const keyPress = (type: string) => (event: { code: string }) => {
    const k = event.code.replace("Key", "").toUpperCase();
    const target = data.find((key) => key.letter === k);
    if (target === undefined) return;
    if (type === "down") play(target);
    target.playing = type === "down";
    setData([...data]);
  };

  const handleKeyPressDown = useCallback(keyPress("down"), data);
  const handleKeyPressUp = useCallback(keyPress("up"), data);
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPressDown);
    window.addEventListener("keyup", handleKeyPressUp);
  });

  return (
    <div className="flex flex-1 min-h-screen items-center justify-center">
      {keys}
    </div>
  );
}

export default App;
