const webcamFeed    = document.querySelector('.webcam-player') as HTMLVideoElement;
const canvas        = document.querySelector('.webcam-screen') as HTMLCanvasElement;
const ctxt2D        = canvas.getContext('2d');
const strip         = document.querySelector('.screenshot-strip') as HTMLElement;
const snap          = document.querySelector('.snap') as HTMLAudioElement;

/**
 * Nimmt den Video-Feed der Webcam, macht alle 16ms einen Screenshot und
 * zeigt diesen im canvas an.
 */
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
