const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(`\n`);

const ns = input[1].split(' ');
const ms = input[3].split(' ');

const count = {};
ns.forEach((v) => {
    count[v] = count[v] + 1 || 1;
})

const answer = [];
ms.forEach((v) => answer.push(count[v] || 0));

console.log(answer.join(' '));