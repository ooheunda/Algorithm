function solution(my_string, s, e) {
    let originStr = my_string.slice(s, e + 1);
    let convertedStr = originStr.split('').reverse().join('');
    
    return my_string.replace(originStr, convertedStr);
}