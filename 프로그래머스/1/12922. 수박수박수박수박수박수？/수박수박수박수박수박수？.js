function solution(n) {
    let watermelon = '';
    
    for (let i = 0; i < n; i++) {
        i % 2 === 0 ? watermelon += '수' : watermelon += '박';
    }
    
    return watermelon;
}