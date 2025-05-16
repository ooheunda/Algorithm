const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(`\n`);

const peopleCnt = +input[0];
const shirtNeeds = input[1].split(' ').map((v) => +v);
const [t, p] = input[2].split(' ').map((v) => +v);

let shirtCnt = 0;
shirtNeeds.forEach((v) => {
    if (v > 0) {
        shirtCnt += v <= t ? 1 : Math.ceil(v / t);
    }
})

let penCnt = `${Math.floor(peopleCnt / p)} ${peopleCnt % p}`;

console.log(`${shirtCnt}\n${penCnt}`);