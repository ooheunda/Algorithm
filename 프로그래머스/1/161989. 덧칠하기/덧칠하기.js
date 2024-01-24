function solution(n, m, section) {
    let wall = [];
    let answer = 0;
    
    for (let i = 0; i < n; i++) {
        wall.push(0);
    }
    
    section.forEach(paint => {
        wall[paint - 1] = 1;
    })
    
    for (let i = 0; i < n; ) {
        if (wall[i]) {
            i += m;
            answer++;
        } else {
            i++;
        }
    }
    
    return answer;
}