function solution(n) {
    var answer = [];
    
    let strNum = "" + n;
    for (let i = strNum.length - 1; i >= 0; i--) {
        answer.push(strNum[i] / 1);
    }
    
    return answer;
}