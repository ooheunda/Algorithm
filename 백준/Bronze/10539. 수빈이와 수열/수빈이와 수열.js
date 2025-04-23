const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split(`\n`)[1];

function solution(str) {
    const sequence = str.split(' ');
    const answer = [];
    
    for (let i = 0; i < sequence.length; i++) {
        let sum = answer.reduce((acc, cur) => acc += +cur, 0);
        answer[i] = sequence[i] * (i + 1) - sum;
    }
    
    return answer.join(' ');
}

console.log(solution(input));