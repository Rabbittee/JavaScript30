window.addEventListener('keydown', e => {
    const playKey = e.keyCode;
    const audio = document.querySelector(`audio[data-key="${playKey}"]`);
    if (!audio) return;
    document.querySelector(`div[data-key="${playKey}"]`).classList.add('playing');

    audio.play();
    audio.currentTime = 0;
});

window.addEventListener('keyup', e => {
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!key) return;
    key.classList.remove('playing');
});