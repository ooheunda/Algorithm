function solution(n) {
    for (let i = n + 1; ; i++) {
        if (n.toString(2).replaceAll('0', '') === i.toString(2).replaceAll('0', ''))
            return i;
    }
}