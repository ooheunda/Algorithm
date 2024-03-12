function solution(n) {
    let answer = 1;
    let temp = 1;
    
    while (temp <= n) {
        temp *= ++answer;
    }
    
    return answer - 1;
}