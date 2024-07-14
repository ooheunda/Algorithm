function solution(arr, intervals) {
    const answer = [];
    
    for (let i = 0; i < intervals.length; i++) {
        answer.push(arr.filter((elem, idx) => intervals[i][0] <= idx && intervals[i][1] >= idx))
    }
    
    return answer.flat();
}