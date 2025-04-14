function solution(s) {
    let flag = 1;
    let answer = '';
    
    for (let i = 0; i < s.length; i++) {
        answer += flag % 2 ? s[i].toUpperCase() : s[i].toLowerCase();
        flag = s[i] === ' ' ? 1 : ++flag;
    }
    
    return answer;
}