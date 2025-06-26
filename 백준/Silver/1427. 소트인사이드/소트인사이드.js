const input = require('fs').readFileSync(0, 'utf-8').toString().trim();

const strArr = input.split('').sort((a, b) => +b - +a);
console.log(strArr.join(''));