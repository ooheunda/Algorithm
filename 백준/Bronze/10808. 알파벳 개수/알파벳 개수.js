const input = require('fs').readFileSync(0, 'utf-8').toString().trim();

function solution(str) {
    const answerArr = (new Array(27)).fill(0, 0, 26);
    const a = 'a'.charCodeAt();
    
    for (let i = 0; i < str.length; i++) {
        const idx = str[i].charCodeAt() - a;
        answerArr[idx]++;
    }
    
    return answerArr.join(' ');
}

console.log(solution(input));