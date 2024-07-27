function solution(arr) {
    let answer = [];
    let idx = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== answer[idx - 1]) {
            answer[idx] = arr[i];
            idx++;
        }
    }
    
    if (answer[0] !== arr[0]) {
        answer.unshift(arr[0]);
    }
    
    return answer;
}