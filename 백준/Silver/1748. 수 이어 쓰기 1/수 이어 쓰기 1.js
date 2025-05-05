const input = require('fs').readFileSync(0, 'utf-8').toString().trim();

function solution(num) {
    let answer = 0;
    let digit = 1;
    let start = 1;

    while (start <= num) {
        const end = Math.min(num, start * 10 - 1);
        answer += (end - start + 1) * digit;
        start *= 10;
        digit += 1;
    }
    
    return answer;
}

console.log(solution(input));