function solution(n) {
    var answer = 0;
    
    let x = n ** (1 / 2);
    answer = (x !== Math.floor(x)) ? -1 : (x + 1) ** 2
        
    return answer;
}