function solution(my_str, n) {
    const answer = [];
    const cnt = my_str.length;
    
    for (let i = 0; i < cnt / n; i++) {
        let str = my_str.length > n ? my_str.slice(0, n) : my_str;
        answer.push(str);
        my_str = my_str.slice(n);
    }
    
    return answer;
}