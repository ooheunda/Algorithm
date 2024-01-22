function solution(answers) {
    let answer = [];
    let arr1 = [1, 2, 3, 4, 5];
    let arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let cnt1 = 0, cnt2 = 0, cnt3 = 0;
    
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === arr1[i % arr1.length]) cnt1++;
        if (answers[i] === arr2[i % arr2.length]) cnt2++;
        if (answers[i] === arr3[i % arr3.length]) cnt3++;
    }
    
    [cnt1, cnt2, cnt3].reduce((_, cur, i) => {
        if (cur === Math.max(cnt1, cnt2, cnt3)) answer.push(i + 1);
    }, 0)
    
    return answer;
}