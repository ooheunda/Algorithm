const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(`\n`);

const commands = input.map((v) => v.split(' ')).slice(1);
const stack = [];

function solution(command, v) {
    if (command === 'push') stack.push(v);
    if (command === 'pop') {
        if (stack.length === 0) return -1;
        const pop = stack.pop();
        return pop;
    }
    if (command === 'size') return stack.length;
    if (command === 'empty') return stack.length === 0 ? 1 : 0;
    if (command === 'top') {
        if (stack.length === 0) return -1;
        return stack[stack.length - 1];
    }
}

let answer = [];
for (const [command, v] of commands) {
    const result = solution(command, v);
    if (command !== 'push') answer.push(result);
}

console.log(answer.join(`\n`));