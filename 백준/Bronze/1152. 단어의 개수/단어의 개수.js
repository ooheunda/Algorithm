const input = require('fs').readFileSync(0, 'utf-8').toString().trim();
const words = input.split(' ');

console.log(words[0] ? words.length : 0);