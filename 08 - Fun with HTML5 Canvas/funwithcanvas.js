"use strict";
const canvas = document.querySelector('#draw');
const ctx2D = canvas.getContext('2d');
// resize Canvas auf Größe des Browserfensters (muss das nicht in einem Resize-Event auch passieren?)
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// Zeichenstile initialisieren
if (ctx2D) {
    ctx2D.lineCap = 'round';
    ctx2D.lineJoin = 'round';
    ctx2D.globalCompositeOperation = 'color-burn';
}
// Logik und Events initialisieren
let isMouseDown = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let width = 10;
canvas.addEventListener('mousedown', e => restartDrawing(e.clientX, e.clientY));
canvas.addEventListener('mouseup', () => isMouseDown = false);
canvas.addEventListener('mouseout', () => isMouseDown = false);
canvas.addEventListener('mousemove', e => {
    if (isMouseDown) {
        drawLineTo(e.clientX, e.clientY);
    }
});
function restartDrawing(currentX, currentY) {
    lastX = currentX;
    lastY = currentY;
    hue = 0;
    width = 10;
    isMouseDown = true;
}
// Linie von letzter Pos auf aktuelle Mauspos zeichnen
function drawLineTo(currentX, currentY) {
    if (ctx2D) {
        ctx2D.lineWidth = width;
        ctx2D.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        ctx2D.beginPath();
        ctx2D.moveTo(lastX, lastY);
        ctx2D.lineTo(currentX, currentY);
        ctx2D.stroke();
    }
    width = width < 100 ? width + 1 : 100;
    hue = (hue + 1) % 360;
    lastX = currentX;
    lastY = currentY;
}
