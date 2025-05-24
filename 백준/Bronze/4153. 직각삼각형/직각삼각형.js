const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(`\n`);
const anglesArr = input.slice(0, -1);

let answer = [];
anglesArr.forEach((angles) => {
    const [a, b, c] = angles.split(' ').map((v) => v ** 2);
    
    if (a + b === c || a + c === b || b + c === a) {
        answer.push('right');
    } else {
        answer.push('wrong');
    }
})

console.log(answer.join(`\n`));