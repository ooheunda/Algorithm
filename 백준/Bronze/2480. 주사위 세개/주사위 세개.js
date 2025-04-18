const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

function solution(str) {
    const arr = str.split(' ');
    
    if (arr[0] === arr[1] && arr[1] === arr[2]) {
        return arr[0] * 1000 + 10000;
    } else if (arr[0] === arr[1] || arr[0] === arr[2]) {
        return arr[0] * 100 + 1000;
    } else if (arr[1] === arr[2]) {
        return arr[1] * 100 + 1000;
    } else {
        return Math.max(...arr) * 100;
    }
}

console.log(solution(input));