const input = require('fs').readFileSync(0, 'utf-8').toString().trim();
const [n, k] = input.split(' ').map((v) => +v);

function solution(n, k) {
    const answer = [];
    const removed = new Array(n);
    
    let temp = 0;
    while (answer.length < n) {
        for (let i = 0; i < k; i++) {
            temp++;
            if (temp > n) temp -= n;
            
            // 건너뛰기
            while (removed[temp - 1] === null) {
                temp++;
                if (temp > n) temp -= n;
            }
        }
        
        answer.push(temp);
        removed[temp - 1] = null;
    }
    
    return answer;
}

console.log(`<${solution(n, k).join(', ')}>`);