"use strict";
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
console.log('orig array = ' + players);
const playersCopyWithSlice = players.slice();
playersCopyWithSlice[0] = 'slice';
console.log('slice copy = ' + playersCopyWithSlice);
const playersCopyWithConcat = [].concat(players);
playersCopyWithConcat[1] = 'concat';
console.log('concat copy = ' + playersCopyWithConcat);
const playersCopyWithSpread = [...players];
playersCopyWithSpread[2] = 'spread';
console.log('spread copy = ' + playersCopyWithSpread);
const playersCopyWithFrom = Array.from(players);
playersCopyWithFrom[3] = 'from';
console.log('from copy = ' + playersCopyWithFrom);
console.log('orig array is still fine = ' + players);
const person = {
    name: 'Wes Bos',
    age: 80
};
console.log('orig person = ' + JSON.stringify(person));
const personAssigned = Object.assign({}, person);
personAssigned.age = 81;
console.log('assigned copy = ' + JSON.stringify(personAssigned));
const personSpread = Object.assign({}, person);
personSpread.age = 82;
console.log('spread copy = ' + JSON.stringify(personSpread));
console.log('orig person is still fine = ' + JSON.stringify(person));
//# sourceMappingURL=refvscopy.js.map