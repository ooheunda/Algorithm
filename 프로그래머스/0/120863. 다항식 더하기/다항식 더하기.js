function solution(polynomial) {
    let temp = [0, 0];
    let arr = polynomial.split(' + ');

    arr.forEach((elem) => {
        if (elem.includes('x')) {
            let num = elem.replace('x', '');
            temp[0] += num.length ? +num : 1;
        } else {
            temp[1] += +elem;
        }
    })
    
    let answer = temp[0] > 1 ? `${temp[0]}x` : temp[0] === 1 ? 'x' : '';
    answer += answer.length && temp[1] ? ` + ${temp[1]}` : temp[1] || '';
    
    return answer;
}