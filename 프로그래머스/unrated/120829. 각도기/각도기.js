function solution(angle) {
    var answer = 0;
    
    angle === 90 ? answer = 2 : 
    angle === 180 ? answer = 4 : 
    angle < 90 ? answer = 1 : answer = 3;
    
    return answer;
}