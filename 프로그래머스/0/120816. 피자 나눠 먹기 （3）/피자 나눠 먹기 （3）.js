function solution(slice, n) {
    let answer = Math.trunc(n / slice);
    return n % slice === 0 ? answer : answer + 1;
}