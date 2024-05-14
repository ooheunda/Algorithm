function solution(numbers, k) {
    let answer;
    let idx = 0;
    
    for (let i = 0; i < k; i++) {
        answer = numbers[idx];
        idx += 2;
        
        if (idx >= numbers.length) {
            idx = idx % numbers.length;
        }
    }
    
    return answer;
}