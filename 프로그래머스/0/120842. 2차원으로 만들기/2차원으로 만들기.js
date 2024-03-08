function solution(num_list, n) {
    let answer = [];
    let temp = [];
    
    num_list.forEach((num, i) => {
        temp.push(num);
        if ((i + 1) % n === 0) {
            answer.push(temp);
            temp = [];
        }
    })
    
    return answer;
}