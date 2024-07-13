function solution(str_list, ex) {
    return str_list.filter((elem) => !elem.includes(ex)).join('');
}