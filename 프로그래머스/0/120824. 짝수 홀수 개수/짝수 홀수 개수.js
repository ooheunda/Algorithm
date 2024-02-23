function solution(num_list) {
    let answer = [0, 0];
    
    for (let i = 0; i < num_list.length; i++) {
        num_list[i] % 2 ? answer[1] += 1 : answer[0] += 1;
    }
    
    return answer;
}