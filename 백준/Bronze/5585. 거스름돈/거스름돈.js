const input = require('fs').readFileSync(0, 'utf-8').toString().trim();

const coins = [500, 100, 50, 10, 5, 1];
let change = 1000 - input;
let cnt = 0;

coins.forEach((coin) => {
    cnt += Math.floor(change / coin);
    change = change % coin;
})

console.log(cnt);