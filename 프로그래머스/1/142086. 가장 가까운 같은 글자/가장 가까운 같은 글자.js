function solution(s) {
    const answer = [-1];
    
    for (let i = 1; i < s.length; i++) {
        let push = 0;
        for (let j = i - 1; j >= 0; j--) {
            if (s[i] === s[j]) {
                push = i - j;
                break;
            } else {
                push = -1;
            }
        }
        answer.push(push);
    }
    
    return answer;
}