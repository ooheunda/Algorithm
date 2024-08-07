function solution(n) {
    let answer = 1;
    
    while (n !== 1) {
        if (n % 2) {
            n--;
            answer++;
        } else {
            n /= 2;
        }
    }
    
    return answer;
}