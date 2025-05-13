const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(`\n`);

const numArr = input[1].split(' ').map((v) => +v);
const max = Math.max(...numArr);
const min = Math.min(...numArr);

console.log(`${min} ${max}`);