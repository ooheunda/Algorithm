function solution(arr, divisor) {
    let answer = arr.filter(item => item % divisor === 0);
    answer.sort((a, b) => a - b);
    
    if (answer[0] === undefined) answer.push(-1);
    
    return answer;
}