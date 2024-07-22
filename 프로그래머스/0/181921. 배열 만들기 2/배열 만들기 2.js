function solution(l, r) {
    let answer = [];
    
    for (let i = l; i <= r; i++) {
        if (!String(i).match(/[^05]/g)) answer.push(i);
        if (i % 5 === 0) i += 4;
    }
    
    return answer.length ? answer : [-1];
}