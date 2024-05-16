function solution(my_string) {
    const operator = my_string.match(/[+-]/g);
    const operand = my_string.split(/[+-]/g);
    let answer = +operand[0];
    
    for (let i = 0; i < operator.length; i++) {
        answer += operator[i] === '+' ? +operand[i + 1] : -operand[i + 1];
    }
    
    return answer;
}