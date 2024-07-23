function solution(a, b, c, d) {
    // set.length = 1인 경우 1111 * p
    // set.length = 2인 경우 1) 2개 2개씩 같은 경우 2) 3개가 같고 1개는 다른 경우
    // set.length = 3인 경우
    // set.length = 4인 경우 제일 작은 숫자
    let arr = Array.from(new Set([a, b, c, d]));
    
    switch (arr.length) {
        case 1: return 1111 * arr[0];
        case 2:
            let temp = [a, b, c, d].filter((elem) => elem === arr[0]).length;
            if (temp === 1) return (10 * arr[1] + arr[0]) ** 2;
            if (temp === 2) return (arr[0] + arr[1]) * Math.abs(arr[0] - arr[1]);
            if (temp === 3) return (10 * arr[0] + arr[1]) ** 2;
        case 3: 
            let p = 0;
            
            for (let i = 0; i < 4; i++) {
                let temp = [a, b, c, d];
                p = temp[i];
                if (temp.lastIndexOf(p) !== i) break;
            }
            
            arr = arr.filter((elem) => elem !== p);
            return arr[0] * arr[1];
        case 4: return Math.min(a, b, c, d);
    }
}