const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(`\n`);

const removed = Math.round(+input[0] * 15 / 100);
const scores = input.map(Number).slice(1);

function solution(removed, scores) {
    if (!scores.length) return 0;
    
    const sortedScores = scores.sort((a, b) => a - b);
    for (let i = 0; i < removed; i++) {
        sortedScores[i] = null;
        sortedScores[sortedScores.length - 1 - i] = null;
    }
    
    return Math.round(sortedScores.reduce((acc, cur) => acc + cur, 0) / (sortedScores.length - removed * 2));
}

console.log(solution(removed, scores));