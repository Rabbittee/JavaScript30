window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

function RecognitionDisplay(config) {
  config = {
    lang: 'en-US',
    interimResults: true,
    ...config,
  };
  const recognition = new SpeechRecognition();
  recognition.lang = config.lang;
  recognition.interimResults = config.interimResults;

  const handleParagraph = (() => {
    const wrap = document.querySelector('.words');
    const paragraphTemplate = (contentText) => `<p>${contentText.trim()}</p>`;
    return {
      updateLast(contentText = '') {
        if (typeof contentText !== 'string') return;
        wrap.lastChild.textContent = contentText;
      },
      generate(contentText = '') {
        if (typeof contentText !== 'string') return;
        const generateParagraph = (() => {
          const template = document.createElement('template');
          template.innerHTML = paragraphTemplate(contentText);
          return template.content;
        })();
        wrap.appendChild(generateParagraph);
      },
    };
  })();

  const handleResult = (() => {
    let currentResult = null;
    return {
      clear() {
        currentResult = null;
      },
      set(val) {
        currentResult = val;
      },
    };
  })();

  const speechResult = (resultEvent) => {
    return Array.from(resultEvent.results)
      .map((result) => result[0])
      .map((result) => result.transcript)
      .join('');
  };

  const onEnd = () => {
    handleResult.clear();
    handleParagraph.generate('');
    recognition.start();
  };

  const onResult = (event) => {
    const speech = speechResult(event);
    handleResult.set(speech);
    handleParagraph.updateLast(speech);
  };

  const init = () => {
    handleParagraph.generate('');
    recognition.start();
  };

  recognition.addEventListener('end', onEnd);
  recognition.addEventListener('result', onResult);
  init();
}

RecognitionDisplay({
  lang: 'zh-Hant-TW',
});
