interface KeyModel {
  name?: string;
  keyNumber: string;
  letter?: string;
}

function Key(props: KeyModel) {
  return (
    <div
      data-key={props.keyNumber}
      className="border-4 border-solid border-black rounded-lg m-4 text-2xl py-4 px-2 w-40 text-center text-white bg-black bg-opacity-40"
    >
      <kbd className="block text-6xl">{props.letter}</kbd>
      <span className="text-xl uppercase tracking-widest text-yellow-500">
        {props.name}
      </span>
    </div>
  );
}

function Audio(props: KeyModel) {
  return (
    <audio
      data-key={props.keyNumber}
      src="../../sample/sounds/boom.wav"
    ></audio>
  );
}

function App() {
  const keys = [
    { name: "clap", keyNumber: "65", letter: "A" },
    { name: "hihat", keyNumber: "83", letter: "S" },
    { name: "kick", keyNumber: "68", letter: "D" },
    { name: "openhat", keyNumber: "70", letter: "F" },
    { name: "boom", keyNumber: "71", letter: "G" },
    { name: "ride", keyNumber: "72", letter: "H" },
    { name: "snare", keyNumber: "74", letter: "J" },
    { name: "tom", keyNumber: "75", letter: "K" },
    { name: "tink", keyNumber: "76", letter: "L" },
  ];

  const keysEle = keys.map((key) => (
    <Key
      key={key.keyNumber}
      name={key.name}
      keyNumber={key.keyNumber}
      letter={key.letter}
    />
  ));

  return (
    <div className="flex flex-1 min-h-screen items-center justify-center">
      {keysEle}
      <Audio keyNumber="65" />
    </div>
  );
}

export default App;
