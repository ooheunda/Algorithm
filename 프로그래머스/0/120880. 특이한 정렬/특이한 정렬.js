function solution(numlist, n) {
    numlist.sort((a, b) => {
        if (n - a === -(n - b)) {
            if (a > b) return -1;
            return 1;
        }
        
        return Math.abs(n - a) - Math.abs(n - b)
    })
    
    return numlist;
}