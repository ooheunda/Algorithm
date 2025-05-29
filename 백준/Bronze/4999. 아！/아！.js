const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(`\n`);

let answer = input[0].length >= input[1].length ? 'go' : 'no';
console.log(answer);