const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(`\n`);

const [h, s] = input[0].split(' ').map((v) => +v);

const notHear = new Set(input.slice(1, h + 1));
const notSee = new Set(input.slice(h + 1));

const answer = [];

if (h >= s) {
    notSee.forEach((v) => {
        if (notHear.has(v)) answer.push(v);
    })
} else {
    notHear.forEach((v) => {
        if (notSee.has(v)) answer.push(v);
    })
}

console.log(`${answer.length}\n${answer.sort().join(`\n`)}`);