"use strict";
const hero = document.querySelector('.hero');
const heroText = hero ? hero.querySelector('h1') : undefined;
const shadowMax = 50;
if (hero) {
    hero.addEventListener('mousemove', e => moveShadow(e));
}
function moveShadow(e) {
    const mouseX = e.x;
    const mouseY = e.y;
    if (heroText) {
        const dX = mouseX - (heroText.offsetLeft + heroText.clientWidth / 2);
        const dY = mouseY - (heroText.offsetTop + heroText.clientHeight / 2);
        const shadowX = 2 * dX * shadowMax / window.innerWidth;
        const shadowY = 2 * dY * shadowMax / window.innerHeight;
        heroText.style.textShadow = `${Math.round(-shadowX)}px ${Math.round(-shadowY)}px 3px darkgrey`;
    }
}
