"use strict";
const konamiCode = [
    "arrowup",
    "arrowup",
    "arrowdown",
    "arrowdown",
    "arrowleft",
    "arrowright",
    "arrowleft",
    "arrowright",
    "b",
    "a",
    "enter"
];
const currentSequence = [];
window.addEventListener('keyup', e => detectKonamiCode(e));
function detectKonamiCode(e) {
    const lastKeyCode = e.key.toLowerCase();
    currentSequence.push(lastKeyCode);
    if (!isPrefix(currentSequence, konamiCode)) {
        currentSequence.length = 0;
    }
    else if (konamiCode.length === currentSequence.length) {
        console.log('KONAMI Code detected!');
        currentSequence.length = 0;
    }
}
function isPrefix(prefix, arr) {
    return prefix.filter((elem, idx) => elem === arr[idx])
        .length === prefix.length;
}
