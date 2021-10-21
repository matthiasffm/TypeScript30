const timeElem = document.querySelector('.videos') as HTMLUListElement;
const times    = Array.from(timeElem.querySelectorAll('li')) as HTMLLIElement[];

var totalTimeInSecondes = times.map(time => parseSeconds(time.dataset.time))
                               .reduce((sum, t) => sum + t, 0);

var seconds = totalTimeInSecondes % 60;
var minutes = Math.floor((totalTimeInSecondes % 3600) / 60);
var hours   = Math.floor(totalTimeInSecondes / 3600);
console.log(`${hours}:${minutes}:${seconds}`)

function parseSeconds(time: string | undefined): number {
    if(time) {
        const timeParts = time.split(':');
        return timeParts.map((timepart, i) => Number(timepart) * Math.pow(60, timeParts.length - i - 1))
                        .reduce((sum, t) => sum + t, 0);
    }
    else {
        return 0;
    }
}
