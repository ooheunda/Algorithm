function solution(emergency) {
    const answer = [];
    
    for (let i = 1; i < emergency.length + 1; i++) {
        let max = Math.max(...emergency);
        let idx = emergency.indexOf(max);
        emergency[idx] = 0;
        answer[idx] = i;
    }
    
    return answer;
}