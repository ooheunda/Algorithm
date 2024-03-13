function solution(my_string) {
    let answer = 0;
    
    my_string = my_string.split(/[^0-9]/g);
    for (let i = 0; i < my_string.length; i++) {
        answer += +my_string[i];
    }
    
    return answer;
}