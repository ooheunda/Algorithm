const input = require('fs').readFileSync(0, 'utf-8').toString().trim();

const nums = input.split(' ').map(Number);
const sum = nums.reduce((acc, cur) => acc + cur ** 2, 0);

console.log(sum % 10);