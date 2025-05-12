const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(`\n`);
const calculated = input.map((v) => v % 42);
const set = new Set(calculated);

console.log(set.size);