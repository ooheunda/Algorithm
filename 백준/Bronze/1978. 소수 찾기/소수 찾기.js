const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(`\n`);

const n = +input[0];
const nums = input[1].split(' ').map(Number);

let count = 0;

nums.forEach((num) => {
  if (num < 2) return;

  let isPrime = true;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) count++;
});

console.log(count);