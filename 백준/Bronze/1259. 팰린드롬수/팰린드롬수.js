const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(`\n`);
const numStrArr = input.map((v) => String(v)).slice(0, -1);

function solution(numStr) {
    const len = numStr.length;
    
    for (let i = 0; i <= len / 2; i++) {
        if (numStr[i] !== numStr[len - 1 - i]) return 'no';
    }
    
    return 'yes';
}

numStrArr.forEach((numStr) => { console.log(solution(numStr)); });