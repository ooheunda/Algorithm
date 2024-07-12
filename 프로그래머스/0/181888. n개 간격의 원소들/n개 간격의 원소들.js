function solution(num_list, n) {
    return num_list.filter((elem, idx) => idx % n === 0);
}