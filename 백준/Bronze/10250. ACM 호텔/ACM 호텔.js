const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(`\n`);
const questions = input.slice(1).map((v) => v.split(' ').map(Number));

function solution(question) {
    const [h, w, n] = question;
    
    const floor = (n % h || h) + '';
    const ho = Math.ceil(n / h) + '';
    
    return `${floor}${ho.padStart(2, '0')}`;
}

const answers = [];
questions.forEach((question) => {
    answers.push(solution(question));
})

console.log(answers.join(`\n`));