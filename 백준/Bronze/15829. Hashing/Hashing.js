const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(`\n`);

const [len, str] = input;
const codeFlag = 'a'.charCodeAt() - 1;
const [r, m] = [31, 1234567891];

let sum = 0;
for (let i = 0; i < +len; i++) {
    const a = str[i].charCodeAt() - codeFlag;
    sum += a * (r ** i);
}

console.log(sum % m);