const input = require('fs').readFileSync(0, 'utf-8').toString().trim();
const n = +input;

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(n));