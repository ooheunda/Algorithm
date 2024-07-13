function solution(arr, k) {
    return arr.map((elem) => k % 2 ? elem * k : elem + k);
}