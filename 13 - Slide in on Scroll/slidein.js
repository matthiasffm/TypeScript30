"use strict";
const images = Array.from(document.querySelectorAll('.slide-in'));
window.addEventListener('scroll', debounce(scrollSlide));
function scrollSlide(e) {
    const windowBottom = window.scrollY + window.innerHeight;
    images.forEach(image => {
        if (image.offsetTop < windowBottom - image.height / 2 && image.offsetTop > window.scrollY) {
            image.classList.add('active');
        }
        else {
            image.classList.remove('active');
        }
    });
}
function debounce(func, wait = 20, immediate = true) {
    var timerId;
    const context = this;
    const args = arguments;
    return () => {
        var callNow = immediate && !timerId;
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            timerId = undefined;
            if (!immediate) {
                func.apply(context, args);
            }
        }, wait);
        if (callNow) {
            func.apply(context, args);
        }
    };
}
//# sourceMappingURL=slidein.js.map