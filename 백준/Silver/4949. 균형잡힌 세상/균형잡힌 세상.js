const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(`\n`);
const sentences = input.slice(0, -1);

function solution(sentence) {
    const len = sentence.length;
    const stack = [];
    
    let last = '';
    for (let i = 0; i < len; i++) {
        const ch = sentence[i];
        
        if (ch === '(' || ch === '[') {
            stack.push(ch);
            last = ch;
        }
        
        if (ch === ')' || ch === ']') {
            if (!stack.length) return 'no';
            
            if ((ch === ')' && last === '(') || (ch === ']' && last === '[')) {
                stack.pop();
                last = stack.length ? stack[stack.length - 1] : '';
            } else {
                return 'no';
            }
        }
    }
    
    return stack.length ? 'no' : 'yes';
}

const answers = [];
sentences.forEach((sentence) => answers.push(solution(sentence)));

console.log(answers.join(`\n`));