const input = require('fs').readFileSync(0, 'utf-8').toString().trim();
const [n, k] = input.split(' ').map(Number);

// 이항계수 n / k === n! / (k! * (n - k)!)
function solution(n, k) {
    if (n === k) return 1;

    let nume = n;
    for (let i = n - 1; i > k; i--) {
        nume *= i;
    }

    let deno = 1;
    for (let i = 2; i <= n - k; i++) {
        deno *= i;
    }
    
    return nume / deno;
}



console.log(solution(n, k));