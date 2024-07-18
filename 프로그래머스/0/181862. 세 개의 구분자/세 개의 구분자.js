function solution(myStr) {
    let answer = myStr.split(/[abc]/g).filter((elem) => elem !== '');
    return answer[0] ? answer : ['EMPTY'];
}