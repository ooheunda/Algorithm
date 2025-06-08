const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(`\n`);

const [n, m] = input[0].split(' ').map(Number);
const a = input.slice(1, n + 1).map((v) => v.split(' ').map(Number));
const b = input.slice(n + 1).map((v) => v.split(' ').map(Number));

const answer = [];

for (let i = 0; i < n; i++) {
    const temp = [];
    for (let j = 0; j < m; j++) {
        temp.push(a[i][j] + b[i][j]);
    }
    answer.push(temp.join(' '));
}

console.log(answer.join(`\n`));