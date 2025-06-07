const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(`\n`);

const arr = input[1].split(' ').filter((v) => v === input[2]);
console.log(arr.length);