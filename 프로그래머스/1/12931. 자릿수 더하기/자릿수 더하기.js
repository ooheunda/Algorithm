function solution(n) {
    var answer = 0;

    let strNum = "" + n;
    for (let i = 0; i < strNum.length; i++) {
        answer -= strNum[i];
    }
    
    return -answer;
}