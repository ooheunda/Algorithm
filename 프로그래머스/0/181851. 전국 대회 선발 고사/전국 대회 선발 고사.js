function solution(rank, attendance) {
    let arr = [];
    
    let filteredRank = rank.map((elem, idx) => !attendance[idx] ? rank.length + 1 : elem);
    
    for (let i = 0; i < 3; i++) {
        let top = Math.min(...filteredRank);
        let idx = filteredRank.indexOf(top);
        arr.push(idx);
        filteredRank[idx] = rank.length + 1;
    }
    
    return 10000 * arr[0] + 100 * arr[1] + arr[2];
}