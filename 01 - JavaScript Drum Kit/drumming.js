"use strict";
window.addEventListener('keydown', ev => {
    const keyPressed = ev.key.toUpperCase();
    if (keyPressed >= 'A' && keyPressed <= 'Z') {
        const audioElem = document.querySelector(`audio[data-key=${keyPressed}]`);
        if (audioElem) {
            const audioFile = audioElem.getAttribute('src');
            console.log('now play audio for ' + audioFile);
            audioElem.currentTime = 0;
            audioElem.play();
            const divElemForKey = document.querySelector(`.note-key[data-key=${keyPressed}]`);
            divElemForKey.classList.add('note-key-playing');
        }
    }
});
const keyButtons = document.querySelectorAll('.note-key');
for (let keyButton of keyButtons) {
    keyButton.addEventListener('transitionend', te => {
        if (te.propertyName === 'transform') {
            keyButton.classList.remove('note-key-playing');
        }
    });
}
//# sourceMappingURL=drumming.js.map