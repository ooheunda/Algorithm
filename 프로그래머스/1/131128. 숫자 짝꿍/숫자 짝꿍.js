function solution(X, Y) {
    let answer = [];
    let x = (X + '').split('').sort();
    let y = (Y + '').split('').sort();
    
    for (let i = 0; i < 10; i++) {
        let xCnt = x.lastIndexOf(`${i}`) + 1;
        let yCnt = y.lastIndexOf(`${i}`) + 1;
        
        if (xCnt !== -1 && yCnt !== -1) {
            for (let j = 0; j < Math.min(xCnt, yCnt); j++) {
                answer.push(`${i}`);
            }
        }
        
        x.splice(0, xCnt);
        y.splice(0, yCnt);
        
        if (!x[0] || !y[0]) break;
    }
    
    answer = answer.sort().reverse().join('');
    
    return answer === '' ? "-1" : +answer ? answer : "0";
}