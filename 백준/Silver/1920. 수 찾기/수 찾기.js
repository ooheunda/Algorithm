const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(`\n`);
const arrA = input[1].split(' ');
const arrB = input[3].split(' ');

function solution(arrA, arrB) {
    const set = new Set(arrA);
    const answers = arrB.map(v => set.has(v) ? 1 : 0);
    
    return answers.join('\n');
}

console.log(solution(arrA, arrB));