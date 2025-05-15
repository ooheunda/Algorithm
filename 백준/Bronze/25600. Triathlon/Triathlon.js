const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(`\n`);

const scores = input.map((v) => v.split(' ').map((v) => +v)).slice(1);

function solution(scores) {
    let answer = 0;
    
    for (const [a, d, g] of scores) {
        let score = a * (d + g);
        if (a === d + g) score *= 2;
        if (score > answer) answer = score;
    }
    
    return answer;
}

console.log(solution(scores));