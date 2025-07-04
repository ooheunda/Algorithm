const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(`\n`);

const [n, m] = input[0].split(' ').map(Number);
const questions = input.slice(n + 1);
const bookByIdx = input.slice(1, n + 1);
const bookByName = bookByIdx.reduce((acc, cur, i) => {
    acc[cur] = i;
    return acc;
}, {})

const answers = [];
questions.forEach((q) => {
    if (isNaN(+q)) {
        answers.push(bookByName[q] + 1);
    } else {
        answers.push(bookByIdx[q - 1]);
    }
})

console.log(answers.join(`\n`));