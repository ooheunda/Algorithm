const input = require('fs').readFileSync(0, 'utf-8').toString().trim();
const n = +input;

function solution(n) {
    let title = 666;
    let cnt = 0;
    
    while (true) {
        let titleStr = title + '';
        if (titleStr.indexOf('666') !== -1) cnt++;
        if (cnt === n) break;
        title++;
    }
    
    return title;
}

console.log(solution(n));