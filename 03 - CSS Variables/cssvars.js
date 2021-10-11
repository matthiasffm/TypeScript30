const inputControls = document.querySelectorAll('.controls input');
inputControls.forEach(inp => inp.addEventListener('change', handleInputEvent));
inputControls.forEach(inp => inp.addEventListener('mousemove', handleInputEvent));
function handleInputEvent(ev) {
    const target = ev.target;
    const units = target.dataset.units || '';
    document.documentElement.style.setProperty(`--${target.name}`, target.value + units);
}
