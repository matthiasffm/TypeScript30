const bands = [
    'The Plot in You',
    'The Devil Wears Prada',
    'Pierce the Veil',
    'Norma Jean',
    'The Bled',
    'Say Anything',
    'The Midway State',
    'We Came as Romans',
    'Counterparts',
    'Oh, Sleeper',
    'A Skylit Drive',
    'Anywhere But Here',
    'An Old Dog'
];

// Namen sortieren per Regex ohne Artikel

const replaceRegEx = new RegExp('^(the |a |an )', 'i');
const sortedBands = bands.sort((s1, s2) => s1.replace(replaceRegEx, '')
                                             .localeCompare(s2.replace(replaceRegEx, '')));

// sortierte Liste in IL umwandeln

const bandsList = document.querySelector('#bands');
if(bandsList) {
    bandsList.innerHTML = sortedBands.map(b => `<li>${b}</li>`)
                                     .join(' ');
}
