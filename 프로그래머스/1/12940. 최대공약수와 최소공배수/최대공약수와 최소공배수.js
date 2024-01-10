function solution(n, m) {
    let answer = [];
    
    for (let i = Math.min(n, m); i > 0; i--) {
        if (n % i === 0 && m % i === 0) {
            answer.push(i);
            break;
        }
    }
    
    answer.push((n * m / answer[0]));
    
    return answer;
}