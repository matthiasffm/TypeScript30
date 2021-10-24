"use strict";
const panels = document.querySelectorAll('.panel');
for (let panel of panels) {
    panel.addEventListener('click', e => {
        panel.classList.toggle('open');
        for (let panelsToClose of panels) {
            if (panelsToClose !== panel) {
                panelsToClose.classList.remove('open');
            }
        }
    });
    panel.addEventListener('transitionend', e => {
        if (e.propertyName.includes('flex')) {
            console.log('transition ended for ' + e.propertyName);
            panel.classList.toggle('open-active');
        }
    });
}
//# sourceMappingURL=flexpanel.js.map