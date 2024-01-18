function solution(k, score) {
    const answer = [];
    const dailyArr = [];
    
    for (let i = 0; i < score.length; i++) {
        dailyArr.push(score[i]);
        dailyArr.sort((a, b) => b - a);
        
        const fameArr = [];
        for (let j = 0; j < k; j++) {
            if (dailyArr[j] !== undefined) fameArr.push(dailyArr[j]);
        }
        
        answer.push(Math.min(...fameArr));
    }
    
    return answer;
}