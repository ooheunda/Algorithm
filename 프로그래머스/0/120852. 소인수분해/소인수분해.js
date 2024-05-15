function solution(n) {
    const answer = [];
    
    while (n > 1) {
        for (let i = 2; i <= n; i++) {
            if (n % i === 0) {
                if (answer.indexOf(i) === -1) answer.push(i);
                n /= i;
                break;
            }
        }
    }
    
    return answer;
}