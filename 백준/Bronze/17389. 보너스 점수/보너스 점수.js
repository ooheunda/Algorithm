const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString();
const oxStr = input.split(`\n`)[1];

function solution(oxStr) {
    let score = 0;
    let bonus = 0;
    
    const len = oxStr.length;
    for (let i = 0; i < len; i++) {
        if (oxStr[i] === 'O') {
            score += i + 1;
            score += bonus;
            bonus++;
        } else {
            bonus = 0;
        }
    }
    
    return score;
}

console.log(solution(oxStr));