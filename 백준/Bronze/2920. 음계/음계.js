const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').toString().trim();

function solution(str) {
    let answer = '';
    const arr = str.split(' ');
    
    for (let i = 1; i < arr.length; i++) {
        const isAsc = arr[i] - arr[i - 1] === 1;
        const isDesc = arr[i - 1] - arr[i] === 1;
        
        if (isAsc) {
            answer = 'ascending';
        } else if (isDesc) {
            answer = 'descending';
        } else {
            return 'mixed';
        }
    }
    
    return answer;
}

console.log(solution(input));