function solution(n) {
    var answer = 0;
    
    let arr = ("" + n).split(""); //n 문자열로 변환 후 split

    arr.sort((a, b) => b - a); //문자열 배열 내림차순 정렬
    
    for (num of arr) {
        answer += num;
    }
    
    return answer / 1;
}