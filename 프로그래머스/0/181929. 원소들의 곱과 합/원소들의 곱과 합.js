function solution(num_list) {
    let mul = 1;
    let sum = 0;
    
    num_list.forEach((elem) => {
        mul *= elem;
        sum += elem;
    })
    
    return +(mul < sum * sum);
}