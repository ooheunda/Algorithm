function solution(array) {
    array = array.join('').split('').sort();
    let seven = array.lastIndexOf('7');
    return seven > 0 ? seven - array.indexOf('7') + 1 : 0;
}