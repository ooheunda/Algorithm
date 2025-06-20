const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(`\n`);

let [_, k] = input[0].split(' ').map(Number);
const coins = input.slice(1).map(Number).sort((a, b) => b - a);

let answer = 0;

coins.forEach((coin) => {
    if (k >= coin) {
        const temp = Math.floor(k / coin);
        k -= temp * coin;
        answer += temp;
    }
})

console.log(answer);