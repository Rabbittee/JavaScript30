const blocks = document.querySelectorAll('.key');
const audios = document.getElementsByTagName('audio');
const audiosArr = [...audios];
const blockMap = new Map();
const audioMap = new Map();

// 使用 Map 存取 audio 和 block 們
audiosArr.forEach(function (audio) {
  audioMap.set(Number(audio.dataset.key), audio);
});

blocks.forEach(function (block) {
  blockMap.set(Number(block.dataset.key), block);
});

// 監聽 document keydown 事件
document.addEventListener('keydown', function (e) {
  const targetNum = e.key.toUpperCase().charCodeAt();
  audioMap.get(targetNum).play();
  blockMap.get(targetNum).classList.toggle('playing', true);
});

// 別忘了也要監聽放開按鍵的時候
document.addEventListener('keyup', function (e) {
  const targetNum = e.key.toUpperCase().charCodeAt();
  blockMap.get(targetNum).classList.toggle('playing', false);
});
