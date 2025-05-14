const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(`\n`);
const psArr = input.slice(1);

function solution(ps) {
    let flag = 0;
    const len = ps.length;
    
    for (let i = 0; i < len; i++) {
        if (ps[i] === '(') flag++;
        else flag--;
        
        if (flag < 0) return 'NO';
    }
    
    return !flag ? 'YES' : 'NO';
}

psArr.forEach((ps) => console.log(solution(ps)));