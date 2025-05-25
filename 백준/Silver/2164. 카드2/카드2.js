const input = require('fs').readFileSync(0, 'utf-8').toString().trim();

const len = +input;
const arr = new Array(len).fill(1).map((v, idx) => v + idx);

for (let i = 0; i < len * 2; i += 2) {
    const temp = arr[i + 1];
    arr.push(temp);
}

for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i]) {
        console.log(arr[i]);
        break;
    }
}