function solution(my_string, indices) {
    return my_string.split('').filter((elem, idx) => !indices.includes(idx)).join('');
}