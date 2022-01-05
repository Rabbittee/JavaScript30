function playAudio(e) {

    /** 先用 ASCII 排除標點符號 */
    const ascii = e.key.charCodeAt(0)
    if(ascii < 97 || ascii > 122) return

    /** 取出要控制的元件 */
    const audio = document.querySelector(`audio[data-key='${e.key}']`)
    const key = document.querySelector(`.key[data-key='${e.key}']`)
    if(!audio) return

    /** 加上樣式，播放聲音 */
    key.classList.add('playing')
    audio.currentTime = 0
    audio.play()
}

function stopAudio() {
    const keys = document.querySelectorAll('.key')
    keys.forEach((key) => key.classList.remove('playing'))
}

document.addEventListener('keydown', playAudio)
document.addEventListener('keyup', stopAudio)

