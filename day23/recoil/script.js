const select = (target) => document.querySelector(target);
const selectAll = (target) => document.querySelectorAll(target);

const voicesDropdown = select('[name="voice"]');
const [rate, pitch, textarea] = selectAll('[type="range"], [name="text"]');
const speakButton = select('#speak');
const stopButton = select('#stop');

function useSpeechSynthesisUtterance() {
  const speech = new SpeechSynthesisUtterance();
  const synth = window.speechSynthesis;
  const voices = synth.getVoices();

  function voice(value) {
    speech.voice = voices[value];
    return {
      speak,
    };
  }

  function watch(func) {
    func(speech, synth);
    return {
      voice,
      speak,
    };
  }

  function speak() {
    synth.speak(speech);
  }

  return {
    watch,
  };
}

const utterance = useSpeechSynthesisUtterance();

speakButton.addEventListener('click', function () {
  utterance
    .watch((speechSynthesis) => {
      speechSynthesis.text = textarea.value;
      speechSynthesis.rate = rate.value;
      speechSynthesis.pitch = pitch.value;
    })
    .voice(voicesDropdown.value)
    .speak();
});

stopButton.addEventListener('click', () => {
  utterance.watch((speechSynthesis, synth) => {
    synth.cancel();
  });
});
