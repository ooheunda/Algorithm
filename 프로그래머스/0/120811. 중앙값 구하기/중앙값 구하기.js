function solution(array) {
    array.sort((a, b) => b - a);
    
    let idx = ~~(array.length / 2);
    if (array.length % 2 === 0) idx++;
    
    return array[idx];
}