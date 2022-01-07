const blocks = document.querySelectorAll('.key')
const audios = document.getElementsByTagName('audio')
const audiosArr = [...audios]

// 監聽 document keydown 事件
document.addEventListener('keydown', function(e) {
  // 用抓到的 audio tag 跑迴圈
  audiosArr.forEach(function(audio) {
    // 定義會用到兩次的 audio key
    let audioKey = Number(audio.dataset.key)
    // 如果 event target 等於 迴圈跑到的 audio key 的話
    if (e.key.toUpperCase().charCodeAt() === audioKey) {
      // 就 play 它ㄅ
      audio.play()
      // 來加上 css 效果，用抓到的每個 div 跑迴圈
      blocks.forEach(function(block) {
        // 如果 audio 迴圈跑到的 audio key 跟 div 的 key 一樣的話
        if (Number(block.dataset.key) === audioKey) {
          // 就加上 playing 的 class
          block.classList.add('playing')
        } else { // 沒有一樣的話
          // 就把有 playing class 的 div 拿掉該 class
          block.classList.remove('playing')
        }
      })
    }
  })
})