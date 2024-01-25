function solution(number, limit, power) {
    // TODO: 약수 개수 구하는 내부 for문 시간복잡도 줄이기
    // hint1. 제곱수의 약수의 개수는 홀수
    // hint2. 제곱수가 아닌 경우 약수는 짝수이므로 쌍을 이룸
    // 49: 1 7 49 | 64: 1 2 4 8 16 32 64
    // 24: 1 2 3 4 6 8 12 24
    // 100: 1 2 4 5 20 25 50 100
    let iron = 0;
    
    for (let i = 1; i <= number; i++) {
        let numOfDivisor = 0;
        for (let j = 1; j <= Math.sqrt(i); j++) {
            if (i % j === 0) numOfDivisor += 2;
        }
        if (Number.isInteger(Math.sqrt(i))) numOfDivisor--;
        iron += numOfDivisor > limit ? power : numOfDivisor;
    }
    
    return iron;
}