const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(`\n`);

const submittedList = input.map(Number);
const submittedSet = new Set(submittedList);
const answer = [];

for (let i = 1; i <= 30; i++) {
    if (!submittedSet.has(i)) answer.push(i);
    if (answer.length === 2) break;
}

console.log(answer.join(`\n`));