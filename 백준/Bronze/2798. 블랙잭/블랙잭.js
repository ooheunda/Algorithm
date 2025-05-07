const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(`\n`);

const target = input[0].split(' ')[1];
const numArr = input[1].split(' ').map((v) => +v);
const len = numArr.length;

function solution(target, numArr) {
    let answer = 0;
    
    for (let i = 0; i < len - 2; i++) {
        for (let j = i + 1; j < len - 1; j++) {
            for (let k = j + 1; k < len; k++) {
                let sum = numArr[i] + numArr[j] + numArr[k];
                if (sum > target) continue;
                if (sum > answer) answer = sum;
                if (answer === target) return answer;
            }
        }
    }
    
    return answer;
}

console.log(solution(+target, numArr));