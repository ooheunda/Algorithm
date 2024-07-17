function solution(arr, queries) {
    queries.forEach((elem) => {
        for (let i = elem[0]; i <= elem[1]; i++) {
            arr[i]++;
        }
    })
    
    return arr;
}