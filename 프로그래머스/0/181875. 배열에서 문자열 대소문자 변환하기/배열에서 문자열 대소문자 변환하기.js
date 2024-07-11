function solution(strArr) {
    return strArr.map((ch, idx) => {
        return idx % 2 ? ch.toUpperCase() : ch.toLowerCase();
    })
}