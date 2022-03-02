let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

function useSpeech() {
  const SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) throw new Error('not support SpeechRecognition.');
  const recognition = new SpeechRecognition();
  const chains = {
    lang,
    watch,
    run,
  };

  function run() {
    recognition.start();
  }

  function lang(language) {
    recognition.lang = language;
    return chains;
  }

  function watch(func) {
    func(recognition);
    return {
      lang,
      run,
    };
  }

  return chains;
}

try {
  useSpeech()
    .lang(navigator.language)
    .watch((recognition) => {
      recognition.addEventListener('result', function ({ results }) {
        const transcript = Array.from(results)
          .map((result) => result[0])
          .map((result) => result.transcript)
          .join('');

        const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩');
        p.textContent = poopScript;

        if (results[0].isFinal) {
          p = document.createElement('p');
          words.appendChild(p);
        }
      });

      recognition.addEventListener('end', recognition.start);
    })
    .run();
} catch (error) {
  console.warn(error);
}
