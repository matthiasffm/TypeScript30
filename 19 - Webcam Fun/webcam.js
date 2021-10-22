"use strict";
const webcamFeed = document.querySelector('.webcam-player');
const canvas = document.querySelector('.webcam-screen');
const ctxt2D = canvas.getContext('2d');
const strip = document.querySelector('.screenshot-strip');
const snap = document.querySelector('.snap');
function captureWebcam() {
    navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then(videoStream => {
        console.log(videoStream);
        webcamFeed.srcObject = videoStream;
        webcamFeed.play();
    });
}
captureWebcam();
//# sourceMappingURL=webcam.js.map