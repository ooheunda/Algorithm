function solution(n) {
    let answer = 0;
    
    for (let i = 1; i <= n; i++) {
        if (n % 2 && i % 2) answer += i;
        if (!(n % 2 || i % 2)) answer += i * i;
    }
    
    return answer;
}