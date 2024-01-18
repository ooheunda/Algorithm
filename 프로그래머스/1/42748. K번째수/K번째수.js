function solution(array, commands) {
    let answer = [];
    
    for (let i = 0; i < commands.length; i++) {
        let newArr = [];
        
        for (let j = commands[i][0] - 1; j <= commands[i][1] - 1; j++) {
            newArr.push(array[j])
        }
        
        newArr.sort((a, b) => a - b);
        answer.push(newArr[commands[i][2] - 1]);
    }
    
    return answer;
}