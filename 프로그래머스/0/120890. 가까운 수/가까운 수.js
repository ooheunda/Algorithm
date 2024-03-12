function solution(array, n) {
    let answer = array[0];
    let distance = Math.abs(array[0] - n);
    
    for (let i = 1; i < array.length; i++) {
        let temp = Math.abs(array[i] - n);
        if (temp <= distance) {
            answer = temp === distance ? Math.min(answer, array[i]) : array[i];
            distance = temp;
        }
    }
    
    return answer;
}