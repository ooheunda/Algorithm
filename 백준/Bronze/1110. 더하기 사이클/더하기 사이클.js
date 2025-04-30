const input = require('fs').readFileSync(0, 'utf-8').toString().trim();

function solution(numStr) {
    let answer = 0;
    const originNum = numStr.length > 1 ? numStr : '0' + numStr;
    
    while(true) {
        if (numStr.length === 1) {
            numStr = '0' + numStr;
        }
        
        let rightNum = numStr[1].toString();
        let sum = (+numStr[0] + +numStr[1]).toString();
        
        numStr = rightNum + sum[sum.length - 1];
        
        answer++;
        if (numStr === originNum) return answer;
    }
}

console.log(solution(input));