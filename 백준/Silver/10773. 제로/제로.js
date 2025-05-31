const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(`\n`);

const len = +input[0];
const nums = input.map(Number).slice(1);

const answer = [];
for (let i = 0; i < len; i++) {
    if (nums[i] === 0) {
        answer.pop();
    } else {
        answer.push(nums[i]);
    }
}

console.log(answer.reduce((acc, cur) => acc + cur, 0));