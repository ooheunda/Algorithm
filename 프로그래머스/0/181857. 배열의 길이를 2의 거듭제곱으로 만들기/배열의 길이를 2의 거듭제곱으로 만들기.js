function solution(arr) {
    let length = arr.length;
    
    for (let i = 0; ; i++) {
        if (2 ** i >= length) {
            length = 2 ** i;
            break;
        }
    }
    
    return arr.concat(new Array(length - arr.length).fill(0));
}