function solution(arr) {
    let isRow = arr.length < arr[0].length;
    let diff = Math.abs(arr.length - arr[0].length);
    
    if (isRow) {
        for (let i = 0; i < diff; i++) {
            arr.push(new Array(arr[0].length).fill(0));
        }
    } else {
        arr.forEach((elem) => elem.push(...(new Array(diff).fill(0))));
    }
    
    return arr;
}