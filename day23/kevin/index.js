const select = (selector) => document.querySelector(selector);

const createOptions = (options = []) => {
  const template = document.createElement('template');
  template.innerHTML = options
    .map(({ lang, name, isDefault }) => {
      if (!lang || !name) return;
      return `<option value="${lang}" ${isDefault ? 'checked' : ''}>${name} (${lang})</option>`;
    })
    .join('');
  return template.content;
};

function Speech() {
  const speech = new SpeechSynthesisUtterance();
  const synth = window.speechSynthesis;

  return {
    setOptions({ rate = 1, pitch = 1, text = '', voice = '' }) {
      speech.text = text || speech.text;
      speech.pitch = pitch || speech.pitch;
      speech.rate = rate || speech.rate;
      speech.voice = voice || speech.voice;
      return this;
    },
    play() {
      synth.cancel();
      synth.speak(speech);
      return this;
    },
    cancel() {
      synth.cancel();
      return this;
    },
    getVoices() {
      return new Promise((resolve) => {
        let id;
        id = setInterval(() => {
          if (synth.getVoices().length !== 0) {
            resolve(synth.getVoices());
            clearInterval(id);
          }
        }, 10);
      });
    },
  };
}

function speechPlayer() {
  const speech = Speech();
  let voiceList = null;

  async function setVoiceList(voices) {
    const domOptions = createOptions(voices);
    select('#voices').innerHTML = '';
    select('#voices').append(domOptions);
  }

  function getVoiceValue() {
    if (Array.isArray(voiceList) === false) throw new Error('voiceList is not a array');
    return voiceList.find((voice) => voice.lang === select('#voices').value);
  }

  function currentOptions() {
    return {
      rate: select('input[name=rate]').value,
      pitch: select('input[name=pitch]').value,
      text: select('textarea[name=text]').value,
      voice: getVoiceValue(),
    };
  }

  function onSpeak() {
    const speechOptions = currentOptions();
    speech.setOptions(speechOptions).play();
  }

  speech
    .getVoices()
    .then((voices) => {
      setVoiceList(voices);
      voiceList = voices;
    })
    .finally(() => {
      select('#speak').addEventListener('click', onSpeak);
      select('#stop').addEventListener('click', speech.cancel);
    })
    .catch((err) => {
      throw new Error('error', err);
    });
}

speechPlayer();
