function solution(arr, k) {
    let answer = new Array(k).fill(-1);
    let idx = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (idx === k) break;
        if (!answer.includes(arr[i])) {
            answer[idx] = arr[i];
            idx++;
        }
    }
    
    return answer;
}