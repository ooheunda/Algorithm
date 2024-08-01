function solution(n) {
    if (n === 2) return 1;
    
    return fibonacci(n) % 1234567;
}

function fibonacci(n) {
    let operand = 1;
    let fiboNum = 1;
    
    for (let i = 2; i < n; i++) {
        let temp = operand;
        operand = fiboNum;
        fiboNum += temp;
        
        if (operand >= 1234567) {
            fiboNum -= 1234567;
            operand -= 1234567;
        }
    }
    
    return fiboNum;
}