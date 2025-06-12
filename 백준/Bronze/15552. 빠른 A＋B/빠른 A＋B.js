const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(`\n`);

const cases = input.slice(1);
const answers = [];

cases.forEach((v) => {
    const [a, b] = v.split(' ').map(Number);
    answers.push(a + b);
})

console.log(answers.join(`\n`));