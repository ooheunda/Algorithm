function solution(a, b, c) {
    let score = a + b + c;
    
    if ((a === b && a !== c) || (b === c && a !== b) || (a === c && a !== b)) {
        score *= a * a + b * b + c * c;
    } else if (a === b && b === c) {
        score *= a * a + b * b + c * c;
        score *= a ** 3 + b ** 3 + c ** 3;
    }
    
    return score;
}