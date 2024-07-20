function solution(arr, queries) {
    let answer = [];
    
    queries.forEach(([s, e, k]) => {
        let filteredArr = arr.slice(s, e + 1).filter((e) => e > k);
        filteredArr.length ? answer.push(Math.min(...filteredArr)) : answer.push(-1);
    })
    
    return answer;
}