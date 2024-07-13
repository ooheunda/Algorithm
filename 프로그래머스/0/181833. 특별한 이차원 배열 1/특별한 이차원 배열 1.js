function solution(n) {
    const arr = [];
    
    for (let i = 0; i < n; i++) {
        const newArr = new Array(n).fill(0);
        newArr[i] = 1;
        arr.push(newArr)
    }
    
    return arr;
}