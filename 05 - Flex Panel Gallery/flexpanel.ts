const panels = document.querySelectorAll('.panel');

for(let panel of panels) {
    panel.addEventListener('click', e => {
        panel.classList.toggle('open');

        /* optional: open für alle anderen panels entfernen so dass nur eines immer aktiv sein kann */
        for(let panelsToClose of panels) {
            if(panelsToClose !== panel) {
                panelsToClose.classList.remove('open');
            }
        }
    });

    panel.addEventListener('transitionend', e => {
        if((e as TransitionEvent).propertyName.includes('flex')) {
            console.log('transition ended for ' + (e as TransitionEvent).propertyName);
            panel.classList.toggle('open-active');
        }
    })
}
