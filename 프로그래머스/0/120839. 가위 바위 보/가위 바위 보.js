function solution(rsp) {
    let answer = "";
    
    for (let i = 0; i < rsp.length; i++) {
        answer += rsp[i] === "0" ? "5" : rsp[i] === "2" ? "0" : "2";
    }
    
    return answer;
}