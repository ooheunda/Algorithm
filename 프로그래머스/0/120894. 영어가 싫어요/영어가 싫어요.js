function solution(numbers) {
    let answer = '';
    const numbersArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    while (numbers.length > 0) {
        for (let i = 0; i < numbersArr.length; i++) {
            let cur = numbersArr[i];
            if (numbers.indexOf(cur) === 0) {
                answer += i;
                numbers = numbers.slice(cur.length);
                break;
            }
        }
    }
    
    return +answer;
}