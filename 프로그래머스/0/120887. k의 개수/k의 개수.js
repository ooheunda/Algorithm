function solution(i, j, k) {
    let answer = '';
    
    for (let num = i; num <= j; num++) {
        answer += num;
    }
    
    return answer.split(`${k}`).length - 1;
}