const input = require('fs').readFileSync(0, 'utf-8').toString().trim();
const nums = input.split(' ').map(Number);

function solution(nums) {
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    
    let gcd = 0; // the greatest common divisor
    for (let i = min; i > 0; i--) {
        if (min % i === 0 && max % i === 0) {
            gcd = i;
            break;
        }
    }
    
    let lcm = 0; // the least common multiple
    for (let i = max; i <= min * max; i++) {
        if (i % max === 0 && i % min === 0) {
            lcm = i;
            break;
        }
    }
    
    return `${gcd}\n${lcm}`
}

console.log(solution(nums));