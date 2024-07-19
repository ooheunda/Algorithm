function solution(arr) {
    let cnt = 0;
    
    while (true) {
        let nextArr = arr.map((elem) => {
            if (elem > 50 && !(elem % 2)) return elem / 2;
            if (elem < 50 && elem % 2) return elem * 2 + 1;
            return elem;
        })
        
        if (arr.filter((elem, idx) => elem === nextArr[idx]).length === arr.length) return cnt;
        
        arr = nextArr;
        cnt++;
    }
}