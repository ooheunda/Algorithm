function solution(array, n) {
    let answer = array.filter((arr) => arr === n);
    return answer.length;
}