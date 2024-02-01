function solution(X, Y) {
    let answer = '';
    let x = (X + '').split('').sort((a, b) => b - a);
    let y = (Y + '').split('').sort((a, b) => b - a);
    
    for (let i = 9; i >= 0; i--) {
        let xCnt = x.lastIndexOf(`${i}`) + 1;
        let yCnt = y.lastIndexOf(`${i}`) + 1;
        
        if (xCnt !== -1 && yCnt !== -1) {
            for (let j = 0; j < Math.min(xCnt, yCnt); j++) {
                answer += i;
            }
        }
        
        x.splice(0, xCnt);
        y.splice(0, yCnt);
        
        if (!x[0] || !y[0]) break;
    }
    
    return answer === '' ? "-1" : +answer ? answer : "0";
}