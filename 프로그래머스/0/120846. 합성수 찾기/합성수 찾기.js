function solution(n) {
    let answer = 0;
    
    for (let i = 4; i <= n; i++) {
        if (i % 2 === 0) {
            answer++;
            continue;
        }
        
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                answer++;
                break;
            }
        }
    }
    
    return answer;
}