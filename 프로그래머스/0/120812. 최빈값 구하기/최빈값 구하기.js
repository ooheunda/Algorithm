function solution(array) {
    let answer;
    let maxCnt = 0;
    
    for (let i = 0; i < array.length; i++) {
        let cnt = 0;
        
        for (let j = i; j < array.length; j++) {
            if (array[i] === array[j]) cnt++;
        }
        
        if (cnt > maxCnt) {
            maxCnt = cnt;
            answer = array[i];
        } else if (cnt === maxCnt) {
            answer = -1;
        }
    }
    
    return answer;
}