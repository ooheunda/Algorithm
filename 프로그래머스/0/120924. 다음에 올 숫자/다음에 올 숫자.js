function solution(arr) {
    let isAp = arr[2] - arr[1] === arr[1] - arr[0];
    let d = isAp ? arr[2] - arr[1] : arr[2] / arr[1];
    
    return isAp ? arr.pop() + d : arr.pop() * d;
}