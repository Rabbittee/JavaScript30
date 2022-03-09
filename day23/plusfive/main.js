/*
 * @Author:Claire Li
 * @Date:2022-03-09 10:36:06
 * @LastEditors:Claire Li
 * @LastEditTime:2022-03-09 15:54:36
 * @Description:
 */
const select = (query) => document.querySelector(query);
const msg = new SpeechSynthesisUtterance();
const synth = window.speechSynthesis;

let voices = [];
const voicesDropdown = select('[name="voice"]');
const rateInput = select('[name="rate"]');
const pitchInput = select('[name="pitch"]');
const speakBtn = select('#speak');
const stopBtn = select('#stop');

msg.text = select('[name="text"]').value;

function recognizeVoice() {
  voices.map((voice) => {
    if (voice.name === voicesDropdown.value) msg.voice = voice;
  });
}

function speak() {
  recognizeVoice();
  synth.speak(msg);
}

voicesDropdown.addEventListener('input', () => speak());

pitchInput.addEventListener('input', (e) => {
  msg.pitch = e.target.value;
  speak();
});

rateInput.addEventListener('input', (e) => {
  msg.rate = e.target.value;
  speak();
});

speakBtn.addEventListener('click', () => speak());

stopBtn.addEventListener('click', () => synth.cancel());

synth.addEventListener('voiceschanged', () => {
  synth.getVoices().forEach((voice) => voices.push(voice));
  voicesDropdown.innerHTML = voices.map(
    (voice) => `
    <option value="${voice.name}">${voice.name} (${voice.lang})</option>
  `
  );
});
