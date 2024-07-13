function solution(my_string) {
    let arr = [];
    
    while (my_string.length) {
        arr.push(my_string);
        my_string = my_string.slice(1);
    }
    
    return arr.sort();
}