"use strict";
let cities = [];
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
fetch(endpoint)
    .then(resp => resp.json())
    .then(json => cities = json);
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
if (searchInput) {
    searchInput.addEventListener('change', onSearchPatternChanged);
    searchInput.addEventListener('keyup', onSearchPatternChanged);
}
function onSearchPatternChanged(e) {
    const searchPattern = e.target.value;
    const searchResult = findMatchingCities(searchPattern, cities);
    const regEx = new RegExp(searchPattern, "gi");
    if (suggestions) {
        suggestions.innerHTML = searchResult.map(c => `
            <li>
                <span class="name">
                    ${c.city.replace(regEx, '<span class="hl">' + searchPattern + '</span>')},
                    ${c.state.replace(regEx, '<span class="hl">' + searchPattern + '</span>')}
                </span>
                <span class="population">${Number(c.population).toLocaleString()}</span>
            </li>
        `).join('');
    }
}
function findMatchingCities(pattern, toSearch) {
    const regEx = new RegExp(pattern, "i");
    return toSearch.filter(c => c.city.match(regEx) || c.state.match(regEx))
        .sort((c1, c2) => Number(c2.population) - Number(c1.population))
        .slice(0, 10);
}
//# sourceMappingURL=typeahead.js.map