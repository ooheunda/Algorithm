const input = require('fs').readFileSync(0, 'utf-8').toString().trim();

function solution(str) {
    let reversedStr = '';
    
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    
    return +(reversedStr === str);
}

console.log(solution(input));