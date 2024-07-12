function solution(ineq, eq, n, m) {
    if (eq === '=') {
        return ineq === '>' ? +(n >= m) : +(n <= m);
    } else {
        return ineq === '>' ? +(n > m) : +(n < m);
    }
}