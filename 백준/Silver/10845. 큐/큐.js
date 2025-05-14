const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(`\n`);

const commands = input.map((v) => v.split(' ')).slice(1);
const queue = [];

function solution(command, v) {
    if (command === 'push') queue.unshift(v);
    if (command === 'pop') {
        if (queue.length === 0) return -1;
        const pop = queue.pop();
        return pop;
    }
    if (command === 'size') return queue.length;
    if (command === 'empty') return queue.length ? 0 : 1;
    if (command === 'front') {
        if (queue.length === 0) return -1;
        return queue[queue.length - 1];
    }
    if (command === 'back') {
        if (queue.length === 0) return -1;
        return queue[0];
    }
}

const answer = [];
for (const [command, v] of commands) {
    const result = solution(command, v);
    if (command !== 'push') answer.push(result);
}

console.log(answer.join(`\n`));