console.log('here is day 20 main.js');

// prefix in chrome browser
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// make a new instance of SpeechRecognition
const recognition = new SpeechRecognition();
// interimResults true -> 即使句子尚未告一段落也會進行語音辨識
recognition.interimResults = true;
// set language
recognition.lang = 'en-US';

// DOM 操作，將辨識出的句子渲染
let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

// event result -> 判定一個單詞已經被識別時，觸發 result 事件
recognition.addEventListener('result', (e) => {
  // e.results
  // -> Array[SpeechRecognitionResult]
  // -> Array[SpeechRecognitionAlternative]
  // ->   confidence: 系統對辨識出的詞匯的信心程度高低
  // ->   transcript: 辨識出的詞
  const transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join('');

  // 若辨識出 poop...等詞彙則將文字替換成 icon
  const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩');
  p.textContent = poopScript;

  // 如果辨識尚未結束則此為 false，辨識結束後則多新增一個 p 作為空行
  if (e.results[0].isFinal) {
    p = document.createElement('p');
    words.appendChild(p);
  }
});

// 結束一段辨識監聽後開啟另一段辨識監聽
recognition.addEventListener('end', recognition.start);

recognition.start();
