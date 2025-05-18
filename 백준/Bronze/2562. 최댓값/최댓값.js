const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(`\n`);
const numArr = input.map((v) => +v);

const max = Math.max(...numArr);
const idx = numArr.indexOf(max) + 1;

console.log(`${max}\n${idx}`)