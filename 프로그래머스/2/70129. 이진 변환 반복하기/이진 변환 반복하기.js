function solution(s) {
    let answer = [0, 0];
    
    while (s !== '1') {
        let len = s.replaceAll('0', '').length;
        answer[1] += s.length - len;
        
        s = len.toString(2);
        answer[0]++;
    }
    
    return answer;
}