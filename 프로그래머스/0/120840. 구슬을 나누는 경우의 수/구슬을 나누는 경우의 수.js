function solution(balls, share) {
    if (balls === share) return 1;
    return Math.trunc(factorial(share + 1, balls) / factorial(1, balls - share));
}

function factorial(n, m) {
    if (m <= n) return n;
    return m * factorial(n, m - 1);
}