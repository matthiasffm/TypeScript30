window.addEventListener('keydown', (ev) => {

    var keyPressed = ev.key.toUpperCase();
    if(keyPressed >= 'A' && keyPressed <= 'Z') {

        const audioElem = document.querySelector(`audio[data-key=${keyPressed}]`) as HTMLAudioElement;
        if(audioElem) {
            const audioFile = audioElem.getAttribute('src');
            console.log('now play audio for ' + audioFile);

            audioElem.currentTime = 0; // zurückspulen für mehrfache schnelle Tastendrücke eines Sounds direkt hintereinander
            audioElem.play();

            const divElemForKey = document.querySelector(`.note-key[data-key=${keyPressed}]`) as HTMLDivElement;
            divElemForKey.classList.add('note-key-playing');
        }
    }
});

// Events registrieren für Ende der CSS-Transitions
const keyButtons = document.querySelectorAll('.note-key');
for(const keyButton of keyButtons) {
    keyButton.addEventListener('transitionend', (te: TransitionEvent) => {
        if(te.propertyName === 'transform') {
            keyButton.classList.remove('note-key-playing');
        }
    });
}
