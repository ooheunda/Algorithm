const input = require('fs').readFileSync(0, 'utf-8').toString().trim();
const n = +input;

function solution(n) {
    let i = 0;
    for (let j = 1; j <= 6; j++) {
        if (n >= 10 ** j) i = 10 ** (j - 1);
    }
    
    let answer = 0;
    while (i < n) {
        let needSum = n - i;
        const nStr = String(i);
        
        for (let j = 0; j < nStr.length; j++) {
            needSum -= nStr[j];
        }
        
        if (needSum === 0) {
            answer = i;
            break;
        }
        
        i++;
    }
    
    return answer;
}

console.log(solution(n));