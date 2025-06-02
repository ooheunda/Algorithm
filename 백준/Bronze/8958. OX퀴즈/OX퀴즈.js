const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(`\n`);
const answers = input.slice(1);

function solution(answer) {
    let score = 0;
    let temp = 0;
    
    for (let i = 0; i < answer.length; i++) {
        temp = answer[i] === 'X' ? 0 : temp + 1;
        score += temp;
    }
    
    return score;
}

const results = [];
answers.forEach((answer) => {
    results.push(solution(answer));
});

console.log(results.join(`\n`));