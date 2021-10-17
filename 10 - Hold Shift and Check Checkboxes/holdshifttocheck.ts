let shiftState: boolean = false;
let checkFrom:  HTMLInputElement | null = null;

const checkboxes = [...document.querySelectorAll(".inbox input[type='checkbox']")] as HTMLInputElement[];

for(let checkbox of checkboxes) {
    checkbox.addEventListener('click', e => onCheckboxClicked(e));
}

// merke Status der Shift-Taste
document.addEventListener('keydown', e => {
    if(e.shiftKey) {
        shiftState = true;
    }
});
document.addEventListener('keyup', e => {
    if(!e.shiftKey) {
        shiftState = false;
        checkFrom  = null;
    }
});

// Hakt alle Checkboxen in dem Intervall von der letzten selektierten Checkbox (checkFrom) bis
// zur aktuell selektieren an.
function onCheckboxClicked(e: Event) {
    const checkbox = e.target as HTMLInputElement;

    if(!checkbox.checked) {
        // Haken entfernen per Shift nicht implementiert
        // TODO: deselktieren ebenfalls per Shift behandeln
        console.log(`unchecked not handled`);
        return;
    }

    if(!shiftState || checkFrom === null) {
        checkFrom = checkbox;
    }
    else if(shiftState) {
        console.assert(checkFrom !== null, "bei Shiftdown muss checkfrom belegt sein!");

        const checkFromIdx  = checkboxes.indexOf(checkFrom);
        const checkUntilIdx = checkboxes.indexOf(checkbox);
        console.log(`check all from ${checkFromIdx} to ${checkUntilIdx}`);

        range(checkFromIdx, checkUntilIdx).forEach(i => checkboxes[i].checked = true);
    }
}

// Iterator über Zahlenbereich unabhängig von der Richtug
function range(from: number, to: number): number[] {
    const length = Math.abs(to - from) + 1;
    const dir    = Math.sign(to - from);

    return Array.from({ length }, (_, i) => from + i * dir);
}
