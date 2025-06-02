const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(`\n`);
const [a, b, c] = input.map(Number);

function solution(a, b, c) {
    const answer = new Array(10).fill(0);
    const multiplied = a * b * c + '';
    
    for (let i = 0; i < multiplied.length; i++) {
        answer[+multiplied[i]]++;
    }
    
    return answer.join(`\n`);
}

console.log(solution(a, b, c));