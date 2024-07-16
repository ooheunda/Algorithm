function solution(arr, flag) {
    let answer = '';
    
    for (let i = 0; i < arr.length; i++) {
        if (flag[i]) {
            answer += String(arr[i]).repeat(arr[i] * 2)
        } else {
            answer = answer.slice(0, answer.length - arr[i]);
        }
    }
    
    return answer.split('').map((elem) => +elem);
}