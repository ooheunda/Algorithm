const input = require('fs').readFileSync(0, 'utf-8').toString().trim();

const arr = input.split(`\n`).slice(1);
const answer = arr.sort((a, b) => a - b);

for (let i = 0; i < answer.length; i++) {
    console.log(answer[i]);
}