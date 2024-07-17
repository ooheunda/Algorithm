function solution(num_list) {
    let answer = 0;
    
    num_list.forEach((elem) => {
        while (elem > 1) {
            elem = elem % 2 ? (elem - 1) / 2 : elem / 2;
            answer++;
        }
    })
    
    return answer;
}