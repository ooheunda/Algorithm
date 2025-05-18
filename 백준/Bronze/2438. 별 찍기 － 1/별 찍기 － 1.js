const input = require('fs').readFileSync(0, 'utf-8').toString().trim();

const n = +input;
const answer = [];

for (let i = 1; i <= n; i++) {
    answer.push('*'.repeat(i));
}

console.log(answer.join(`\n`));