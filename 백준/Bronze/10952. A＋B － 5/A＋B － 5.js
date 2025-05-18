const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(`\n`);
const numArr = input.map((v) => v.split(' ').map((val) => +val)).slice(0, -1);

const answer = [];
for (const [a, b] of numArr) {
    answer.push(a + b);
}

console.log(answer.join(`\n`));