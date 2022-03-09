// 回傳語音 api 的資訊，包含語速、音量、台詞等等
const msg = new SpeechSynthesisUtterance();

// 之後要放入瀏覽器 api 所提供的發聲語言選擇列表
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
msg.text = document.querySelector('[name="text"]').value;

// 將發音選單列出
function populateVoices() {
  console.log('populateVoices api is here');
  voices = this.getVoices();
  console.log(voices);
  voicesDropdown.innerHTML = voices
    .filter(voice => voice.lang.includes('en'))
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join('');
}

function setVoice() {
  console.log('setVoice function is here');
  msg.voice = voices.find(voice => voice.name === this.value);
  console.log(msg);
  toggle();
}

// 切換播放與暫停
function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(msg);
  }
}

// 更新語音的設定
function setOption() {
  console.log(this.name, this.value);
  msg[this.name] = this.value;
  toggle();
}

// 可透過這個去操作 Web Speech API
speechSynthesis.addEventListener('voiceschanged', populateVoices);

// 在發音、語言的選單中選擇了之後觸發
voicesDropdown.addEventListener('change', setVoice);

// 變更速度、語調設定後觸發
options.forEach(option => option.addEventListener('change', setOption));

// Stop and Speak button event
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false));