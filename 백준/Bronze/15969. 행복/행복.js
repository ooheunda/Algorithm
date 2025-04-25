const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim().split(`\n`);
const scoreArr = input[1].split(' ').map(Number);

function solution(scoreArr) {
    const max = Math.max(...scoreArr);
    const min = Math.min(...scoreArr);
    
    return max - min;
}

console.log(solution(scoreArr));