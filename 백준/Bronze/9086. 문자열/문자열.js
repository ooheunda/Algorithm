const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(`\n`);

const answers = [];
const strArr = input.slice(1);

strArr.forEach((str) => {
    const answer = str[0] + str[str.length - 1];
    answers.push(answer);
})

console.log(answers.join(`\n`));