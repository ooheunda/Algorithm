const input = require('fs').readFileSync(0, 'utf-8').toString().trim();
const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');

function solution(word) {
    for (let i = 0; i < alpha.length; i++) {
        const idx = word.indexOf(alpha[i]);
        alpha[i] = idx;
    }
    
    return alpha.join(' ');
}

console.log(solution(input));