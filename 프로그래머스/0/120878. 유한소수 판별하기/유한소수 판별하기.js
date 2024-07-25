function solution(a, b) {
    for (let i = Math.min(a, b); i > 1; i--) {
        if (!(a % i) && !(b % i)) {
            a /= i;
            b /= i;
            break;
        }
    }
    
    for (let i = 0; i < 10; i++) {
        if (b === 1) return 1;
        if (b % 2 === 0) b /= 2;
        if (b % 5 === 0) b /= 5;
    }
    
    return 2;
}