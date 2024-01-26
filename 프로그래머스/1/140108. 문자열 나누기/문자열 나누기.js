function solution(s) {
    let cnt = 1;
    
    outer: while (s.length !== 0) {
        let x = s[0];
        let innerCnt = 0;
        inner: for (let i = 0; i < s.length; i++) {
            x === s[i] ? innerCnt++ : innerCnt--;
            if (i === s.length - 1) break outer;
            if (innerCnt === 0) {
                s = s.slice(i + 1, s.length);
                cnt++;
                break inner;
            }
        }
    }
    
    return cnt;
}