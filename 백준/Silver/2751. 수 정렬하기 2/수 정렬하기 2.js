const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(`\n`);
const arr = input.slice(1).map((v) => +v);

const sortedArr = arr.sort((a, b) => a - b);

console.log(sortedArr.join(`\n`));