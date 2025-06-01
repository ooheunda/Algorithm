const input = require('fs').readFileSync(0, 'utf-8').toString().trim();

const answer = [];
const n = +input;

for (let i = 1; i <= n; i++) {
    answer.push(i);
}

console.log(answer.join(`\n`));