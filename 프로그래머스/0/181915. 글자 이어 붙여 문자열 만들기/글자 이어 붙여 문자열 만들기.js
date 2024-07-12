function solution(my_string, index_list) {
    let answer = '';
    
    index_list.forEach((elem) => {
        answer += my_string[elem];
    })
    
    return answer;
}