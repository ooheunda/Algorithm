const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(`\n`);

const fee = input[0].split(' ').map((v) => +v);
const parked = [input[1], input[2], input[3]].map((v) => v.split(' ').map((v) => +v)).sort((a, b) => a[0] - b[0]);

function solution(fee, parked) {
    let answer = 0;

    for (let time = 1; time <= 100; time++) {
        let count = 0;
        for (let [start, end] of parked) {
            if (time > start && time <= end) count++;
        }
        if (count > 0) answer += count * fee[count - 1];
    }
    
    return answer;
}

console.log(solution(fee, parked));