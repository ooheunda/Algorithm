function solution(numbers) {
    numbers.sort((a, b) => b - a);
    let positiveMax = numbers[0] * numbers[1];
    let negativeMax = numbers[numbers.length - 1] * numbers[numbers.length - 2];
    
    return positiveMax > negativeMax ? positiveMax : negativeMax;
}