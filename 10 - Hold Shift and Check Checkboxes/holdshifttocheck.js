"use strict";
let shiftState = false;
let checkFrom = null;
const checkboxes = [...document.querySelectorAll(".inbox input[type='checkbox']")];
for (let checkbox of checkboxes) {
    checkbox.addEventListener('click', e => onCheckboxClicked(e));
}
document.addEventListener('keydown', e => {
    if (e.shiftKey) {
        shiftState = true;
    }
});
document.addEventListener('keyup', e => {
    if (!e.shiftKey) {
        shiftState = false;
        checkFrom = null;
    }
});
function onCheckboxClicked(e) {
    const checkbox = e.target;
    if (!checkbox.checked) {
        console.log(`unchecked not handled`);
        return;
    }
    if (!shiftState || checkFrom === null) {
        checkFrom = checkbox;
    }
    else if (shiftState) {
        console.assert(checkFrom !== null, "bei Shiftdown muss checkfrom belegt sein!");
        const checkFromIdx = checkboxes.indexOf(checkFrom);
        const checkUntilIdx = checkboxes.indexOf(checkbox);
        console.log(`check all from ${checkFromIdx} to ${checkUntilIdx}`);
        range(checkFromIdx, checkUntilIdx).forEach(i => checkboxes[i].checked = true);
    }
}
function range(from, to) {
    const length = Math.abs(to - from) + 1;
    const dir = Math.sign(to - from);
    return Array.from({ length }, (_, i) => from + i * dir);
}
//# sourceMappingURL=holdshifttocheck.js.map