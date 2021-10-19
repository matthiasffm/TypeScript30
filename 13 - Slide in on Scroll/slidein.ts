const images = Array.from(document.querySelectorAll('.slide-in')) as HTMLImageElement[];

window.addEventListener('scroll', debounce(scrollSlide));

// schiebt die Bilder horizontal rein oder raus, wenn sie zu mehr als der halben Höhe in den sichtbaren
// Bereich des Browserfensters gescrollt werden.
function scrollSlide(e: Event) {
    const windowBottom  = window.scrollY + window.innerHeight;

    images.forEach(image => {
        if(image.offsetTop < windowBottom - image.height / 2 && image.offsetTop > window.scrollY) {
            image.classList.add('active');
        }
        else {
            image.classList.remove('active');
        }
    });
}

// ruft den $func-callback in Intervallen von maximal $wait ms auf, unabhängig wie
// oft und schnell der callback selber von außen getriggert wird
function debounce(this: any, func: Function, wait: number = 20, immediate: boolean = true) {
    var timerId: number | undefined;
    const context = this;
    const args: IArguments = arguments;

    return () => {
        var callNow = immediate && !timerId;
        clearTimeout(timerId);

        timerId = setTimeout(() => {
                      timerId = undefined;
                      if(!immediate) {
                          func.apply(context, args);
                      }}, wait);
        if(callNow) {
            func.apply(context, args);
        }
    };
}
