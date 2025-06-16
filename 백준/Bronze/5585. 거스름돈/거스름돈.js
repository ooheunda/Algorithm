const input = require('fs').readFileSync(0, 'utf-8').toString().trim();

let change = 1000 - input;
let cnt = 0;

if (change >= 500) {
    cnt++;
    change -= 500;
}

if (change >= 100) {
    cnt += Math.floor(change / 100);
    change = change % 100;
} 

if (change >= 50) {
    cnt++;
    change -= 50;
} 

if (change >= 10) {
    cnt += Math.floor(change / 10);
    change = change % 10;
}

if (change >= 5) {
    cnt++;
    change -= 5;
}

if (change >= 1) {
    cnt += change;
}

console.log(cnt);