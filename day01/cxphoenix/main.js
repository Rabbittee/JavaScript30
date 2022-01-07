const sounds = {};
document.querySelectorAll('audio').forEach(soundElmnt => {
    sounds[soundElmnt.getAttribute('data-key')] = soundElmnt;
});

const keys = {};
document.querySelectorAll('.key').forEach(key => {
    keys[key.getAttribute('data-key')] = key;
});

window.addEventListener('keydown', e => {
    const playKey = e.keyCode
    sounds[playKey].play();
    sounds[playKey].currentTime = 0;
    keys[playKey].classList.add('playing');
});

window.addEventListener('keyup', e => {
    keys[e.keyCode].classList.remove('playing');
});