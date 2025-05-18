const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(`\n`);
const numArr = input[1].split('').map((v) => +v);

console.log(numArr.reduce((acc, cur) => acc + cur, 0));