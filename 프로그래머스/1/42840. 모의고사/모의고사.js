function solution(answers) {
    let answer = [];
    let arr1 = [1, 2, 3, 4, 5];
    let arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let cnt = [0, 0, 0]
    
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === arr1[i % arr1.length]) cnt[0]++;
        if (answers[i] === arr2[i % arr2.length]) cnt[1]++;
        if (answers[i] === arr3[i % arr3.length]) cnt[2]++;
    }
    
    cnt.reduce((_, cur, i) => {
        if (cur === Math.max(...cnt)) answer.push(i + 1);
    }, 0)
    
    return answer;
}