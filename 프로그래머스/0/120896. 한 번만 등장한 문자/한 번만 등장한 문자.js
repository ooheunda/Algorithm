function solution(s) {
    let answer = '';
    s = s.split('').sort();
    
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            answer += s[i];  
        } 
    }
    
    return answer;
}