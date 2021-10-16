"use strict";
const people = [
    { name: 'Wes', born: 1988 },
    { name: 'Kait', born: 1986 },
    { name: 'Irv', born: 1970 },
    { name: 'Lux', born: 2015 }
];
// some und every
console.log("gibt es Menschen in der Liste, die älter als 19 Jahre sind? " +
    (people.some(p => p.born <= 2021 - 19) ? "ja" : "nein"));
console.log("sind alle Menschen in der Liste älter als 19 Jahre? " +
    (people.every(p => p.born <= 2021 - 19) ? "ja" : "nein"));
const messages = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];
// find und findIndex
// find the comment with the ID of 823423
const msg823423 = messages.find(m => m.id === 823423);
console.table(msg823423);
// delete the comment with the ID of 823423
const msg823423Idx = messages.findIndex(m => m.id === 823423);
console.log(msg823423Idx);
const newMessages = messages.slice(0, msg823423Idx).concat(messages.slice(msg823423Idx + 1));
console.table(newMessages);
