const input = require('fs').readFileSync(0, 'utf-8').toString().trim();
const numbers = input.split(' ').map((v) => +v);

console.log(numbers[0] + numbers[1]);
console.log(numbers[0] - numbers[1]);
console.log(numbers[0] * numbers[1]);
console.log(Math.floor(numbers[0] / numbers[1]));
console.log(numbers[0] % numbers[1]);