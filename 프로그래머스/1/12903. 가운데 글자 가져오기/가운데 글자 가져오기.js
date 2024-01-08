function solution(s) {
    let idx = Math.trunc(s.length / 2);
    
    if (s.length % 2 === 0) return s[idx - 1] + s[idx];
    
    return s[idx];
}