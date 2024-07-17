function solution(myString, pat) {
    let answer = 0;
    let lastIdx = -1;
    
    while (true) {
        lastIdx = myString.indexOf(pat, lastIdx + 1);
        if (lastIdx === -1) break;
        else answer++;
    }
    
    return answer;
}