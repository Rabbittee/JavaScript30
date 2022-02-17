const select = document.querySelector.bind(document);

function parse(text) {
  const parser = new DOMParser();
  const dom = parser.parseFromString(text, 'text/html');
  return dom.body.firstChild;
}

function Paragraph(results) {
  return /*html */ `
  <p>
  ${Array.from(results)
    .flatMap((item) => Array.from(item))
    .map(({ transcript }) => transcript)}
  </p>
`;
}

(function ({ SpeechRecognition }) {
  const recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.interimResults = false;

  recognition.addEventListener('result', ({ results }) =>
    select('.words').append(parse(Paragraph(results)))
  );
  recognition.addEventListener('end', recognition.start);
  recognition.start();
})({
  SpeechRecognition: window.SpeechRecognition || window.webkitSpeechRecognition,
});
