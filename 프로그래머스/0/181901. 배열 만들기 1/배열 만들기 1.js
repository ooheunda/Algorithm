function solution(n, k) {
    const answer = [];
    
    for (let i = 1; i <= n / k; i++) {
        answer.push(k * i);
    }
    
    return answer;
}