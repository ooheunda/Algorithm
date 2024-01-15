function solution(strings, n) {
    var answer = [];
    
    for (let i = 0; i < strings.length; i++) {
        strings[i] = strings[i][n] + strings[i];
    }

    strings.sort();

    for (let i = 0; i < strings.length; i++) {
        strings[i] = strings[i].replace(strings[i][0], '');
        answer.push(strings[i]);
    }

    return answer;
}