function solution(num_list, n) {
    let tempArr = num_list.splice(n);
    return tempArr.concat(num_list);
}