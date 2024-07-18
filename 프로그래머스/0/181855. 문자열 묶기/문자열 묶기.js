function solution(strArr) {
    let cntArr = new Array(strArr.length).fill(0);
    
    strArr.forEach((elem) => cntArr[elem.length]++)
    
    return Math.max(...cntArr);
}