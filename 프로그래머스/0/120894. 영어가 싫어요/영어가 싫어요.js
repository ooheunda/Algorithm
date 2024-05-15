function solution(numbers) {
    const numbersArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    for (let i = 0; i < numbersArr.length; i++) {
        numbers = numbers.replaceAll(numbersArr[i], i);
    }
    
    return +numbers;
}