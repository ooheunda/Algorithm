const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(`\n`);
const rsArr = input.map((v) => v.split(' ')).slice(1);

function solution(r, s) {
    let answer = '';
    
    for (let i = 0; i < s.length; i++) {
        answer += s[i].repeat(r);
    }
    
    return answer;
}

for (const [r, s] of rsArr) {
    console.log(solution(r, s));
}