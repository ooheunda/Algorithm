const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(`\n`);
const times = input[1].split(' ').map((v) => +v);

function solution(times) {
    let answer = 0;
    let temp = 0;
    
    const optimized = times.sort((a, b) => a - b);
    optimized.forEach((v) => {
        answer += v + temp;
        temp += v;
    })
    
    return answer;
}

console.log(solution(times));