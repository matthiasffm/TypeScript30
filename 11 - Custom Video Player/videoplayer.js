"use strict";
const player = document.querySelector('.video-player');
if (player) {
    const viewer = player.querySelector('.video-player-viewer');
    const progress = player.querySelector('.video-player-progress');
    const progressBar = player.querySelector('.video-player-progress-filled');
    const toggleButton = player.querySelector('.toggle');
    const fullscreenButton = player.querySelector('.video-fullscreen-button');
    const skipButtons = Array.from(player.querySelectorAll('[data-skip]'));
    const sliders = Array.from(player.querySelectorAll('.video-player-slider'));
    toggleButton === null || toggleButton === void 0 ? void 0 : toggleButton.addEventListener('click', togglePlay);
    viewer === null || viewer === void 0 ? void 0 : viewer.addEventListener('click', togglePlay);
    viewer === null || viewer === void 0 ? void 0 : viewer.addEventListener('play', () => { toggleButton.textContent = '║'; });
    viewer === null || viewer === void 0 ? void 0 : viewer.addEventListener('pause', () => { toggleButton.textContent = '►'; });
    viewer === null || viewer === void 0 ? void 0 : viewer.addEventListener('timeupdate', showVideoProgress);
    let mouseDown = false;
    progress === null || progress === void 0 ? void 0 : progress.addEventListener('mousedown', () => mouseDown = true);
    progress === null || progress === void 0 ? void 0 : progress.addEventListener('mouseup', () => mouseDown = false);
    progress === null || progress === void 0 ? void 0 : progress.addEventListener('mousemove', e => mouseDown && setProgress(e.offsetX * 100 / progress.offsetWidth));
    progress === null || progress === void 0 ? void 0 : progress.addEventListener('click', e => setProgress(e.offsetX * 100 / progress.offsetWidth));
    skipButtons === null || skipButtons === void 0 ? void 0 : skipButtons.forEach(skipButton => skipButton.addEventListener('click', () => skip(Number(skipButton.dataset.skip))));
    sliders === null || sliders === void 0 ? void 0 : sliders.forEach(slider => slider.addEventListener('change', () => updateRange(slider.name, Number(slider.value))));
    fullscreenButton === null || fullscreenButton === void 0 ? void 0 : fullscreenButton.addEventListener('click', toggleFullscreen);
    function togglePlay() {
        if (viewer.paused) {
            viewer.play();
        }
        else {
            viewer.pause();
        }
    }
    function toggleFullscreen() {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
        else {
            viewer.requestFullscreen();
        }
    }
    function skip(seconds) {
        viewer.currentTime += seconds;
    }
    function setProgress(percent) {
        viewer.currentTime = viewer.duration * percent / 100;
    }
    function showVideoProgress() {
        const percent = Math.floor(viewer.currentTime * 100 / viewer.duration);
        progressBar.style.flexBasis = `${percent}%`;
    }
    // TODO: unschönen switch ersetzen durch getrennte Handler für changeVolume und changePlaybackRate
    function updateRange(rangeToChange, newValue) {
        switch (rangeToChange) {
            case 'volume':
                viewer.volume = newValue;
                break;
            case 'playbackRate':
                viewer.playbackRate = newValue;
                break;
            default:
                break;
        }
    }
}
