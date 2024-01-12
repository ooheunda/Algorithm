function solution(n) {
    let answer = 0;
    let reverseTernary = '';
    
    while (n > 2) {
        reverseTernary += n % 3;
        n = Math.floor(n / 3);
    }
    reverseTernary += n;
    
    let length = reverseTernary.length;
    for (let i = 0; i < length; i++) {
        answer += +reverseTernary[length - 1 - i] * (3**i);
    }
    
    return answer;
    
}