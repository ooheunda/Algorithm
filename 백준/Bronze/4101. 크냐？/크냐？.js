const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(`\n`);

const cases = input.slice(0, -1).map((v) => v.split(' ').map(Number));
const answers = [];
cases.forEach(([a, b]) => {
    answers.push(a > b ? 'Yes' : 'No');
})

console.log(answers.join(`\n`));