function solution(arr, n) {
    let isOdd = arr.length % 2;
    
    return arr.map((elem, idx) => {
        if (!isOdd && idx % 2 || isOdd && !(idx % 2)) return elem + n;
        return elem;
    });
}