const input = require('fs').readFileSync(0, 'utf-8').toString().trim().split(`\n`);

// 값 설정
const rewardA = [500, 300, 200, 50, 30, 10];
const capacityA = [1, 2, 3, 4, 5, 6];
const aLen = rewardA.length;

const rewardB = [512, 256, 128, 64, 32];
const capacityB = [1, 2, 4, 8, 16];
const bLen = rewardB.length;

// solution
function solution(a, b) {
    let sum = 0;
    
    let temp = 0;
    for (let i = 0; i < aLen; i++) {
        temp += capacityA[i];
        if (a > 0 && a <= temp) {
            sum += rewardA[i];
            break;
        }
    }
    
    temp = 0;
    for (let i = 0; i < bLen; i++) {
        temp += capacityB[i];
        if (b > 0 && b <= temp) {
            sum += rewardB[i];
            break;
        }
    }
    
    return sum * 10000;
}

// 출력
for (let i = 1; i <= input[0]; i++) {
    const [a, b] = input[i].split(' ');
    console.log(solution(a, b));
}