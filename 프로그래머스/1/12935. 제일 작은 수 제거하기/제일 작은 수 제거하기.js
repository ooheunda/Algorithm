function solution(arr) {
    if (!arr[1]) return [-1];
    
    let min = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    
    return arr.filter(items => items > min);
}