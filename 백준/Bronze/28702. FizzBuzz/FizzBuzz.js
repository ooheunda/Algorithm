const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(`\n`);

function solution(nums) {
    let num;
    let idx;
    
    // 유효한 숫자 찾기
    nums.forEach((n, i) => {
        if (!isNaN(+n)) {
            num = +n;
            idx = i;
        }
    })
    
    // 다음에 올 숫자
    num += 3 - idx;
    
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    if (num % 3 === 0 && num % 5 !== 0) return 'Fizz';
    if (num % 3 !== 0 && num % 5 === 0) return 'Buzz';
    return num;
}

console.log(solution(input));