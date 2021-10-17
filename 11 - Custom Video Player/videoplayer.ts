const player  = document.querySelector('.video-player');
if(player) {
    const viewer            = player.querySelector('.video-player-viewer') as HTMLVideoElement;
    const progress          = player.querySelector('.video-player-progress') as HTMLDivElement;
    const progressBar       = player.querySelector('.video-player-progress-filled') as HTMLDivElement;
    const toggleButton      = player.querySelector('.toggle') as HTMLButtonElement;
    const fullscreenButton  = player.querySelector('.video-fullscreen-button') as HTMLButtonElement;
    const skipButtons       = Array.from(player.querySelectorAll('[data-skip]')) as HTMLButtonElement[];
    const sliders           = Array.from(player.querySelectorAll('.video-player-slider')) as HTMLInputElement[];

    toggleButton?.addEventListener('click', togglePlay);
    viewer?.addEventListener('click', togglePlay);
    viewer?.addEventListener('play',  () => { toggleButton.textContent = '║'; });
    viewer?.addEventListener('pause', () => { toggleButton.textContent = '►'; });
    viewer?.addEventListener('timeupdate', showVideoProgress);

    let mouseDown: boolean = false;
    progress?.addEventListener('mousedown', () => mouseDown = true);
    progress?.addEventListener('mouseup',   () => mouseDown = false);
    progress?.addEventListener('mousemove', e  => mouseDown && setProgress(e.offsetX * 100 / progress.offsetWidth));
    progress?.addEventListener('click',     e  => setProgress(e.offsetX * 100 / progress.offsetWidth));

    skipButtons?.forEach(skipButton => skipButton.addEventListener('click', () => skip(Number((skipButton as HTMLButtonElement).dataset.skip))));
    sliders?.forEach(slider => slider.addEventListener('change', () => updateRange(slider.name, Number(slider.value))));

    fullscreenButton?.addEventListener('click', toggleFullscreen);

    function togglePlay() {
        if(viewer.paused) {
            viewer.play();
        }
        else {
            viewer.pause();
        }
    }

    function toggleFullscreen() {
        if(document.fullscreenElement) {
            document.exitFullscreen();
        }
        else {
            viewer.requestFullscreen();
        }
    }
    function skip(seconds: number) {
        viewer.currentTime += seconds;
    }

    function setProgress(percent: number) {
        viewer.currentTime = viewer.duration * percent / 100;
    }

    function showVideoProgress() {
        const percent = Math.floor(viewer.currentTime * 100 / viewer.duration);
        progressBar.style.flexBasis = `${percent}%`;
    }

    // TODO: unschönen switch ersetzen durch getrennte Handler für changeVolume und changePlaybackRate
    function updateRange(rangeToChange: string, newValue: number) {
        switch(rangeToChange) {
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
