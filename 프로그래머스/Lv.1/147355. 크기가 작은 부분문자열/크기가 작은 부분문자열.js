function solution(t, p) {
    let answer = 0;
    
    for (let i = 0; i < t.length - p.length + 1; i++) {
        let str = '';
        for (let j = i; str.length !== p.length; j++) {
            str += t[j];
        }
        if (str <= p) answer++
    }
    
    return answer;
}