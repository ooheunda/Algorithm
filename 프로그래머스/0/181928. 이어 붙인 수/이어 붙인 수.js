function solution(num_list) {
    let odd = '';
    let even = '';
    
    num_list.forEach((elem) => {
        if (elem % 2) {
            odd += elem;
        } else {
            even += elem;
        }
    })
    
    return +odd + +even;
}