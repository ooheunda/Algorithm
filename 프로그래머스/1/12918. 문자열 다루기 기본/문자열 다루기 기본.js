function solution(s) {
    if (s.includes('e')) return false; // 지수 표기법
    return (s.length === 4 || s.length === 6) && !isNaN(s);
}