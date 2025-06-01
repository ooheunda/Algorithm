const input = require('fs').readFileSync(0, 'utf-8').toString().trim();
const year = +input;

let answer = 0;
// 윤년은 연도가 4의 배수이면서, 100의 배수가 아닐 때 또는 400의 배수일 때이다.
if (year % 4 === 0) {
    if (year % 400 === 0 || year % 100 !== 0) answer = 1;
}

console.log(answer);