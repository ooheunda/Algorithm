function solution(s){
    let temp = 0;
    
    for (let i = 0; i < s.length; i++) {
        temp += s[i] === '(' ? 1 : -1;
        if (temp < 0) return false;
    }
    
    return temp === 0;
}