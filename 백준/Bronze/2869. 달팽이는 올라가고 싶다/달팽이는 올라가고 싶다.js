const input = require('fs').readFileSync(0, 'utf-8').toString().trim();
const [a, b, v] = input.split(' ').map(Number);
console.log(1 + Math.ceil((v - a) / (a - b)));