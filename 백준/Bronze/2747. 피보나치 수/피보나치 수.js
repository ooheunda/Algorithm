const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

function solution(n) {
    const arr = [0, 1];
    
    for (let i = 0; arr.length < n + 1; i++) {
        arr.push(arr[i] + arr[i + 1]);
    }
    
    return arr[n];
}

console.log(solution(input));