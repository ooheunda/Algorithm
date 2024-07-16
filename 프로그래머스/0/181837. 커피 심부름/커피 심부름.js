function solution(order) {
    let answer = 0;
    
    for (let i = 0; i < order.length; i++) {
        answer += order[i].includes('latte') ? 5000 : 4500;
    }
    
    return answer;
}