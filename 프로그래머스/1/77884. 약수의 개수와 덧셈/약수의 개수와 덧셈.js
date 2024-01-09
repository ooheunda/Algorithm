function solution(left, right) {
    let answer = 0;
    
    for (let i = left; i <= right; i++) {
        let numOfDivisor = 0;
        
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) numOfDivisor++;
        }
        
        numOfDivisor % 2 === 0 ? answer += i : answer -= i;
    }
    
    return answer;
}