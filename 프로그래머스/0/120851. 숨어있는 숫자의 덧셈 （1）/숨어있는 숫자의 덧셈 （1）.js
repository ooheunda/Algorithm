function solution(my_string) {
    let answer = 0;
    
    for (let i = 0; i < my_string.length; i++) {
        if (1 <= my_string[i] && my_string[i] <= 9)
            answer += +my_string[i];
    }
    
    return answer;
}