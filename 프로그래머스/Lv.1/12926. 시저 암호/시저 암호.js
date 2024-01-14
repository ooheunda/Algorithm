function solution(s, n) {
    // 'A' = 65 | 'Z' = 90 | 'a' = 97 | 'z' = 122
    let answer = '';
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            answer += ' ';
            continue;
        }
        
        let ch = s.charCodeAt(i);
        if (65 <= ch && ch <= 90) {
            ch += n;
            if (ch > 90) {
                ch -= 26;
            }
        } else {
            ch += n;
            if (ch > 122) {
                ch -= 26;
            }
        }
        
        answer += String.fromCharCode(ch);   
    }
    
    return answer;
}