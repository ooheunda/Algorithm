function solution(myString) {
    let answer = '';
    myString = myString.toLowerCase();

    for (let i = 0; i < myString.length; i++) {
        if (myString[i] === 'a') {
            answer += 'A';
        } else {
            answer += myString[i];
        }
    }
    
    return answer;
}