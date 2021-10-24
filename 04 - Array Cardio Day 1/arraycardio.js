"use strict";
const inventors = [
    { first: 'Albert', last: 'Einstein', born: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', born: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', born: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', born: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', born: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', born: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', born: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', born: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', born: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', born: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', born: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', born: 1829, passed: 1909 }
];
function lifeLength(inv) {
    return inv.passed - inv.born;
}
const born1500s = inventors.filter(i => i.born >= 1500 && i.born < 1600);
console.table(born1500s);
const fullNames = inventors.map(i => `${i.first} ${i.last}`);
console.log(fullNames);
const sortedByBirthAsc = inventors.sort((inv1, inv2) => inv1.born - inv2.born);
console.table(sortedByBirthAsc);
const sumLifeLength = inventors.reduce((sum, i) => sum + lifeLength(i), 0);
console.log(sumLifeLength);
const sortedByLifeLengthDesc = inventors.sort((inv1, inv2) => lifeLength(inv2) - lifeLength(inv1));
console.table(sortedByLifeLengthDesc);
const names = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];
const sortedByLastNameAsc = names.map(n => n.split(','))
    .map(n => ({ last: n[0], first: n[1] }))
    .sort((p1, p2) => p1.last.localeCompare(p2.last));
console.table(sortedByLastNameAsc);
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
const summedUpData = data.reduce((dict, str) => {
    dict[str] = dict[str] === undefined ? 1 : dict[str] + 1;
    return dict;
}, {});
console.table(summedUpData);
//# sourceMappingURL=arraycardio.js.map