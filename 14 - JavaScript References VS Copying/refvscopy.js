"use strict";
//
// Kopieren von Arrays
//
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
console.log('orig array = ' + players);
// eine Möglichkeit ist slice() des ganzen Arrays
const playersCopyWithSlice = players.slice();
playersCopyWithSlice[0] = 'slice';
console.log('slice copy = ' + playersCopyWithSlice);
// oder ein neues Array erstellen und alle Elemente des ursprünglichen per concat anhängen
const playersCopyWithConcat = [].concat(players);
playersCopyWithConcat[1] = 'concat';
console.log('concat copy = ' + playersCopyWithConcat);
// oder Spread aus ES6 nutzen
const playersCopyWithSpread = [...players];
playersCopyWithSpread[2] = 'spread';
console.log('spread copy = ' + playersCopyWithSpread);
// oder per from ein neues Array aus dem ursprünglichen erstellen
const playersCopyWithFrom = Array.from(players);
playersCopyWithFrom[3] = 'from';
console.log('from copy = ' + playersCopyWithFrom);
// die Updates der kopierten Elemente haben nichts am Original geändert
console.log('orig array is still fine = ' + players);
//
// und das Gleiche für Objekte ....
//
const person = {
    name: 'Wes Bos',
    age: 80
};
console.log('orig person = ' + JSON.stringify(person));
// kopieren per assign
// const personAssigned = Object.assign({}, person, { age: 81 });
const personAssigned = Object.assign({}, person);
personAssigned.age = 81;
console.log('assigned copy = ' + JSON.stringify(personAssigned));
// kopieren per spread
const personSpread = Object.assign({}, person);
personSpread.age = 82;
console.log('spread copy = ' + JSON.stringify(personSpread));
// die Updates der kopierten Objekte haben nichts am Original geändert
console.log('orig person is still fine = ' + JSON.stringify(person));
