const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split('');

const isbn = input.slice(0, -1).map(Number);
const check = +input[12];

function solution(isbn, check) {
    let sum = 0;
    let damagedIdx = null;
    
    isbn.forEach((v, i) => {
        if (isNaN(v)) {
            damagedIdx = i;
        } else {
            sum += i % 2 ? v * 3 : v;
        }
    })
    
    if (isNaN(check)) {
        return 10 - sum % 10;
    }
    
    for (let i = 0; i <= 9; i++) {
        const temp = damagedIdx % 2 ? i * 3 : i;
        if ((sum + temp + check) % 10 === 0) return i;
    }
}

console.log(solution(isbn, check));