function solution(names) {
    return names.filter((elem, idx) => idx % 5 === 0);
}