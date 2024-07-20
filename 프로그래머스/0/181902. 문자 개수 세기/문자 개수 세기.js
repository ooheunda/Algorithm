function solution(my_string) {
    let answer = new Array(52).fill(0);
    let flag = 'A'.charCodeAt();
    
    [...my_string].forEach((ch) => {
        let idx = ch < 'a' ? ch.charCodeAt() : ch.charCodeAt() - 6;
        answer[idx - flag]++;
    });
    
    return answer;    
}