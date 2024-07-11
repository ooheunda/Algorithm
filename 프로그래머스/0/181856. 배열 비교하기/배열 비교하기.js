function solution(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return arr1.length > arr2.length ? 1 : -1;
    }
    
    let val1 = 0;
    let val2 = 0;
    
    for (let i = 0; i < arr1.length; i++) {
        val1 += arr1[i];
        val2 += arr2[i];
    }
    
    return val1 === val2 ? 0 : val1 > val2 ? 1 : -1;
}