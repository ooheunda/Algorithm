const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(`\n`);

const len = +input[0];
const scores = input[1].split(' ').map((v) => +v);

const max = Math.max(...scores);
const sum = scores.reduce((acc, cur) => acc + cur, 0);

console.log((sum / max * 100) / len);