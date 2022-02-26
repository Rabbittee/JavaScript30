/*
 * @Author:Claire Li
 * @Date:2022-02-26 15:51:33
 * @LastEditors:Claire Li
 * @LastEditTime:2022-02-26 17:16:15
 * @Description:
 */
// setting the recognition
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'zh-TW';

// select and create DOM element
const select = (query) => document.querySelector(query);
const create = (element) => document.createElement(element);
let p = create('p');
select('.words').appendChild(p);

// start recognize
recognition.addEventListener('result', (e) => {
  let transcript = Array.from(e.results)
    .map((result) => result[0].transcript)
    .join();
  p.innerText = transcript;

  if (e.results[0].isFinal) {
    p = create('p');
    select('.words').appendChild(p);
  }
});

// listening end event and start recognize again
recognition.addEventListener('end', recognition.start);

recognition.start();
