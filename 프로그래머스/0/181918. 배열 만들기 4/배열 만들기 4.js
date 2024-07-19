function solution(arr) {
    let stk = [];
    
    for (let i = 0; i < arr.length; i++) {
        let len = stk.length;
        if (!len || (len && stk[len - 1] < arr[i])) {
            stk.push(arr[i]);
        } else {
            stk.pop();
            --i;
        }
    }
    
    return stk;
}