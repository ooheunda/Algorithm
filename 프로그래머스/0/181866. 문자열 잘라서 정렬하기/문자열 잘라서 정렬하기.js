function solution(myString) {
    return myString.split('x').filter((elem) => elem !== '').sort();
}