const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(`\n`);

const x = input[0].split(' ').map(Number)[1];
const nums = input[1].split(' ').filter((n) => +n < x);

console.log(nums.join(' '));