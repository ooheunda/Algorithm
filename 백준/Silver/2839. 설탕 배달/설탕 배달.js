const input = require('fs').readFileSync(0, 'utf-8').toString().trim();

function solution(kg) {
    let answer = 0;
    
    while(kg % 5 !== 0) {
        if (kg < 0) return -1;
        kg -= 3;
        answer++;
    }
    
    answer += kg / 5;
    
    return answer;
}

console.log(solution(input));