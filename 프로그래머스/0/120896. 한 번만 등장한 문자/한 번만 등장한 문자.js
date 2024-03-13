function solution(s) {
    let answer = '';
    s = s.split('').sort();
    
    for (let i = 0; i < s.length; i++) {
        i === s.lastIndexOf(s[i]) ? answer += s[i] : i = s.lastIndexOf(s[i]);
    }
    
    return answer;
}