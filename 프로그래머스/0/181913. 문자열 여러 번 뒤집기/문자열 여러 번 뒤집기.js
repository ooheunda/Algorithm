function solution(my_string, queries) {
    let arr = my_string.split('');
    
    queries.forEach(([s, e]) => {
        for (let i = s; i < (s + e) / 2; i++) {
            let temp = arr[i];
            arr[i] = arr[e + s - i];
            arr[e + s - i] = temp;
        }
    })
    
    return arr.join('');
}